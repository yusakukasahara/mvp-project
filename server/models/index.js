var db = require('../db');

module.exports = {
	profiles: {
		get: function(callback) {
			var queryStr =
				'select profile.name, profile.origin, profile.history, profile.interests, profile.experience, profile.fact1, profile.fact2, profile.fact3, profile.photourl \
                      from profiles  \
                      order by profile.id desc';
			db.query(queryStr, function(err, results) {
				callback(err, results);
			});
		},
		post: function(params, callback) {
			var queryStr =
				'insert into profile(name, origin, history, interests, experience, fact1, fact2, fact3, photourl) \
                      value (?, ?, ?, ?, ?, ?, ?, ?, ?)';
			db.query(queryStr, params, function(err, results) {
				callback(err, results);
			});
		}
	}
};
