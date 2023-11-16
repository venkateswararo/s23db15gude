var express = require('express');
const elephant_controlers= require('../controllers/elephant');
var router = express.Router();
/* GET elephants */
router.get('/', elephant_controlers.elephant_view_all_Page );
/* GET detail elephant page */
router.get('/detail', elephant_controlers.elephant_view_one_Page);
/* GET create elephant page */
router.get('/create', elephant_controlers.elephant_create_Page);
/* GET create update page */
router.get('/update', elephant_controlers.elephant_update_Page);
module.exports = router;
