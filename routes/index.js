var express = require('express');
var router = express.Router();


/* GET fruit page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Dynamic generation of web pages on the server side by pug templates" }); // Assuming you have a fruitsArray with fruit data
});

module.exports = router;
