const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema (
  {
    username: String,
    password: String,
    spotifyId: String,
    accessToken: String,
    refreshToken: String,
    expiresIn: String,
    displayName: String,
    isAdmin: false // Do we have to put this? To know if the user has created a quizz or not.
  },
  {
    timestamps: true
  }
)

const User = mongoose.model('User', userSchema);
module.exports= User;