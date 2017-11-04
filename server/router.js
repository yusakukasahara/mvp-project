//routes
var models = require('./models.js');
var router = require('express').Router();

router.get('/profiles', models.profiles.get);
router.post('/profiles', models.profiles.post);

module.exports = router;
