const User = require("./models/User");
const SpotifyWebApi = require("spotify-web-api-node");

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) next();
  else next({ status: 403, message: "Unauthorized" });
}

function initSpotifyWithLoggedInUser(req, res, next) {
  if (!req.user) {
    next({ status: 403, message: "Unauthorized" });
    return;
  }
  const spotifyApi = new SpotifyWebApi({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
    redirectUri: process.env.CLIENT_HOSTNAME + "/login/callback"
  });
  spotifyApi.setAccessToken(req.user.accessToken);
  spotifyApi.setRefreshToken(req.user.refreshToken);
  spotifyApi
    .refreshAccessToken()
    .then(data =>
      User.findByIdAndUpdate(req.user._id, {
        accessToken: data.body.access_token
      })
    )
    .then(() => {
      res.spotifyApi = spotifyApi;
      next();
    })
    .catch(err => next(err));
}

module.exports = {
  isLoggedIn,
  initSpotifyWithLoggedInUser
};
