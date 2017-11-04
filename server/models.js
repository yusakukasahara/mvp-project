//models
var db = require('./db.js');

exports.profiles = {
	get: function(req, res) {
		db.Cohort.find({}).then(data => res.send(data));
	},

	post: function(req, res) {
		console.log(req.body);
		db.Cohort.create(
			{
				name: req.body.name,
				origin: req.body.origin,
				previously: req.body.previously,
				interests: req.body.interests,
				experience: req.body.experience,
				fact1: req.body.fact1,
				fact2: req.body.fact2,
				fact3: req.body.fact3,
				photourl: req.body.photourl
			},
			function(err, result) {
				if (err) {
					console.error(err);
					return;
				}
				res.send(`Profile added!`);
			}
		);
	}
};

/*
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
*/
