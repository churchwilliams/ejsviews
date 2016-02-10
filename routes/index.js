var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
   title: 'Express',
   favoriteAmbient: ['CBL', 'Solar Fields', 'Ishq', 'Church Williams'],
   mathBook: 'Euclid is cool!'
  });
});

module.exports = router;
