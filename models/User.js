const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema (
  {
    username: String,
    password: String,
    spotifyId: String,
    isAdmin: false // Do we have to put this? To know if the user has created a quizz or not.
  },
  {
    timestaps: true
  }
)

const User = mongoose.model('User', userSchema);
module.exports= User;