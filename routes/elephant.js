var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('elephant', { title: 'Search Results for Elephant' });
});

module.exports = router;