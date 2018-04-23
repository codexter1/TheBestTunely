console.log('index.js in routes is being accessed');

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  console.log('A get request is being made');
  res.send({message: "Trying to get data huh?!?"})
});

module.exports = router;
