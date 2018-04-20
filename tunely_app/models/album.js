const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
  artist: String,
  title: String,
  release: String,
  genre: String
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
