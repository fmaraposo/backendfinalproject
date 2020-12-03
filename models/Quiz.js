const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const quizSchema = new Schema (
  {
    quizCode: Number,
    questions: Array,
    songs: Array,
    users: Array,
    isFinished: false // Do we have to put this? To know if the user has created a quizz or not.
  },
  {
    timestaps: true
  }
)

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports= Quiz;


