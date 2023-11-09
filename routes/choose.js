var express = require('express');
var router = express.Router();
 
 
 
/* GET fruit page. */
router.get('/', function(req, res, next) {
  res.render('choose', { title: "Choose" }); // Assuming you have a fruitsArray with fruit data
});
 
module.exports = router;
 