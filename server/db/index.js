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
