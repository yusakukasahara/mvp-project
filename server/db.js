var db = require('mongoose');

db.connect('mongodb://admin:pass@ds147265.mlab.com:47265/cohort');

var cohortSchema = new db.Schema(
	{
		name: {
			type: String,
			required: true
		},
		origin: {
			type: String,
			required: true
		},
		previously: {
			type: String,
			required: true
		},
		interests: {
			type: String,
			required: true
		},
		experience: {
			type: String,
			required: true
		},
		fact1: {
			type: String,
			required: true
		},
		fact2: {
			type: String,
			required: true
		},
		fact3: {
			type: String,
			required: true
		},
		photourl: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

exports.Cohort = db.model('Cohort', cohortSchema);

/*
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'cohort'
});

var selectAll = function(callback) {
	connection.query('SELECT * FROM profiles', function(err, results, fields) {
		if (err) {
			callback(err, null);
		} else {
			callback(null, results);
		}
	});
};

module.exports.selectAll = selectAll;
*/
