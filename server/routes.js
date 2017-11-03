var controller = require('./controllers');
var router = require('express').Router();

router.get('/profiles', controller.profiles.get);
router.post('/profiles', controller.profiles.post);

module.exports = router;
