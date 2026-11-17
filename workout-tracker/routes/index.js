let express = require('express');
let router = express.Router();

/* GET Home page */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
  
/* GET list page */
router.get('/list', function(req, res, next) {
    res.render('index', { title: 'List' });
});

/* GET add page */
router.get('/add', function(req, res, next) {
    res.redirect('/workouts/add');
});

/* GET edit page */
router.get('/edit', function(req, res, next) {
    res.render('index', { title: 'Edit' });
});
module.exports = router;