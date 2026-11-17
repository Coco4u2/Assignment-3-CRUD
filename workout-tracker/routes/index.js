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
  
/* GET About me page */
router.get('/about', function(req, res, next) {
    res.render('index', { title: 'About' });
});

/* GET Projects page */
router.get('/projects', function(req, res, next) {
    res.render('index', { title: 'Projects' });
});

/* GET Contact page */
router.get('/contact', function(req, res, next) {
    res.render('index', { title: 'Contact' });
});
module.exports = router;