console.log('album.js in models has been accessed');
// used to connect to mongoose to link to mongo database
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
// const Artist   = require('./artist');

// used to define album data structure used by database
const AlbumSchema = new Schema({
     album: String,
     artist: String,
     // artist: {type: Schema.Types.ObjectId, ref: 'Artist'},
     image: String,
     releaseDate: String,
});

const Album = mongoose.model('Album', AlbumSchema);
module.exports = Album;
