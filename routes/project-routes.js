const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { format } = require('morgan');
const Quiz = require('../models/Quiz');

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
    { isFinished: true},
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

module.exports = router;
