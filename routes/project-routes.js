const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { format } = require('morgan');
const Quiz = require('../models/Quiz');

//Route to create quiz

router.post('/quiz', (req, res) => {
  const questions = req.body.questions;
  const quizQuestions = [
    "What's your favourite song?",
    'What song reminds your summer of 69?',
  ];
  const quizCode = Math.floor(100000 + Math.random() * 900000);
  //const ourSongsArray = ['Lady Madonna', 'Eleanor Rigby'];
 // const isFinished = false;

  Quiz.create({
    quizCode: quizCode,
    questions: questions,
   // songs: ourSongsArray,
  //  isFinished,
  })
    .then((response) => {
      console.log(`This is the quiz we have just added: ${response}`);
      res.json(response);
    })
    .catch((err) => {
      console.log(`Something went wrong, here is the error: ${err}`);
    });
});

router.get('/quiz-code/:code', (req, res) => {
  const code = req.params.code;
  Quiz.find({ quizCode: code }).then((quiz) => {
    res.json(quiz);
  })
})


//Add array of songs to the Quiz Model
router.put('/quiz/:id/edit', (req, res) => {
  const quizId = req.params.id;
  const songs = req.body.songs;
  Quiz.findByIdAndUpdate(quizId, { $push: {songs: songs }}).then(()=> {
    res.json({ message: `quiz with id ${quizId} was updated`});
  });
});

module.exports = router;

//we need help with the logic of gathering the users and starting the quiz game with all the users that have typed the quiz code. Thats our big hurdle. Quiz.findbyQuizCode??
//we need help with the quiz creation process. 
  // 1. user creates quiz form ('quiz/create')
  //   1a. user can edit the questions ('quiz/edit') BUT THATS ON THE FRONT END
  // 2. quiz starts ('quiz/add')
  // 3. quiz finishes ('quiz/complete')
  //   so each step needs a router.post???