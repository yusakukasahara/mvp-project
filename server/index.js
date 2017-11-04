//server
var express = require('express');
var bodyParser = require('body-parser');
var router = require('./router.js');

var app = express();

app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client/dist'));
app.use('/', router);

app.listen(app.get('port'), function() {
	console.log(`listening on port ${app.get('port')}!`);
});
