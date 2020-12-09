const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { format } = require('morgan');
const Quiz = require('../models/Quiz');
const SpotifyWebAPI = require('spotify-web-api-node');

//Route to create quiz

router.post('/quiz', (req, res) => {
  const myQuestions = req.body.questions;
  const userName = req.body.user;
  console.log('this is the request body', req.body);
  const quizCode = Math.floor(100000 + Math.random() * 900000);

  Quiz.create({
    quizCode: quizCode,
    questions: myQuestions,
    users: userName,
  })
    .then((response) => {
      console.log(`This is the quiz we have just added: ${response}`);
      res.json(response);
    })
    .catch((err) => {
      console.log(`Something went wrong, here is the error: ${err}`);
    });
});

//Get the quiz code and display on frontend
router.get('/quiz/:code', (req, res) => {
  const code = req.params.code;
  Quiz.findOne({ quizCode: code }).then((quiz) => {
    res.json(quiz.quizCode);
  });
});

//Get the Quiz from its quiz code
router.get('/quiz-code/:code', (req, res) => {
  const code = req.params.code;
  Quiz.find({ quizCode: code }).then((quiz) => {
    res.json(quiz);
  });
});

//Add array of songs to the Quiz Model
router.put('/quiz/:quizCode/addsongs', (req, res) => {
  const quizCode = req.params.quizCode;
  const songs = req.body.songs;
  Quiz.findOneAndUpdate(
    { quizCode: quizCode },
    { $push: { songs: songs } },
    { isFinished: true }
  ).then(() => {
    res.json({ message: `quiz with quizCode ${quizCode} was updated` });
  });
});

//Add array of users to the Quiz Model
router.put('/quiz/:code/users', (req, res) => {
  const code = req.params.code;
  const users = req.body.users;
  console.log(req.body);
  Quiz.findOneAndUpdate({ quizCode: code }, { $push: { users: users } }).then(
    () => {
      res.json({ message: `quiz with id ${code} was updated with ${users}` });
    }
  );
});

router.post('/quiz/:code/playlist', (req, res) => {
  const code = req.params.code;
   const access_token = req.body.userToken;
   let playlistURI;

  let playlist = [];
  const spotifyAPI = new SpotifyWebAPI({
    clientId: process.env.SPOTIFY_CLIENT_ID,
    clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  });

  Quiz.findOne({ quizCode: code }).then((quiz) => {
    const songs = quiz.songs;
    let getTrackPromises = [];
    console.log('clientid', process.env.SPOTIFY_CLIENT_ID);
    console.log('clientid', process.env.SPOTIFY_CLIENT_SECRET);

    spotifyAPI.setAccessToken(access_token);

    songs.forEach((song) => {
      getTrackPromises.push(spotifyAPI.searchTracks(`track:${song}`));
    });

    Promise.all(getTrackPromises).then((data) => {
      playlist = data.map((response) => {
        return {
          name: response.body.tracks.items[0].name,
          href: response.body.tracks.items[0].href,
          preview_url: response.body.tracks.items[0].preview_url,
          uri: response.body.tracks.items[0].uri,
        };
      });

     // res.json(playlist);
     return spotifyAPI.createPlaylist('My playlist', { 'description': 'My description', 'public': true })
    })
    .then(data =>
      {
        playlistURI = data.body.uri
        let playlistID = data.body.id
        playlistURIs = playlist.map(song => {
          return song.uri
        })
       
        return spotifyAPI.addTracksToPlaylist(playlistID, playlistURIs)
      })
      .then(data => {
        res.json(playlistURI)
      })
      .catch(err => {
        console.log('this is the error', err)
      })
  });
});

/*
router.get('/quiz/:code/createplaylist', (req,res) => {
  const code = req.params.code;
  Quiz.findOne({quizCode:code})
    .then((quiz) => {
      const spotifyAPI = new SpotifyWebAPI({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      });
  
      spotifyAPI.clientCredentialsGrant()
        .then((data) => {
          spotifyAPI.setAccessToken(data.body["access_token"]);
  
    })
}) */

module.exports = router;
