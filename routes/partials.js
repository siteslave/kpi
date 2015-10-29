var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/main', function(req, res, next) {
  res.render('./partials/main/Main');
});

module.exports = router;
