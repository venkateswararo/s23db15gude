var express = require('express');
const elephant_controlers= require('../controllers/elephant');
var router = express.Router();
var passport=require('passport');
/* GET elephants */
router.get('/', elephant_controlers.elephant_view_all_Page );
/* GET detail elephant page */
router.get('/detail', elephant_controlers.elephant_view_one_Page);
/* GET create elephant page */
router.get('/create', elephant_controlers.elephant_create_Page);
// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
/* GET update elephant page */
router.get('/update', secured, elephant_controlers.elephant_update_Page);
router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
    });
    
/* GET delete elephant page */
router.get('/delete', elephant_controlers.elephant_delete_Page);
module.exports = router;
