const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Quiz = require('../models/Quiz');

//Route to create quiz

router.post('/quiz', (req, res) => {
  const quizQuestions = [
    "What's your favourite song?",
    'What song reminds your summer of 69?',
  ];
  const quizCode = Math.floor(100000 + Math.random() * 900000);
  const ourSongsArray = ['Lady Madonna', 'Eleanor Rigby'];
  const isFinished = false;

  Quiz.create({
    quizCode: quizCode,
    questions: quizQuestions,
    songs: ourSongsArray,
    isFinished,
  })
    .then((response) => {
      console.log(`This is the quiz we have just added: ${response}`);
    })
    .catch((err) => {
      console.log(`Something went wrong, here is the error: ${err}`);
    });
});

//Add array of songs to the Quiz Model
router.post('/quiz/add');

module.exports = router;
