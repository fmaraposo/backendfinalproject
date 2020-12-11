const mongoose = require ('mongoose');
const { Schema, model } = mongoose;

const songslistSchema = new Schema (
  {
    SONG_TITLE: String, 
    ARTIST: String
  },
  {
    timestamps: true // to record created at & updated at 
  }
)
module.exports = model('Songslist', songslistSchema);