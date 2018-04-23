console.log("index.js in models has been accessed");

const mongoose = require('mongoose');

const Album = require('./album');
// const Artist = require('./artist');

module.exports = Album;
