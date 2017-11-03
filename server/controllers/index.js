var models = require('../models');

module.exports = {
	profiles: {
		get: function(req, res) {
			models.profiles.get(function(err, results) {
				if (err) {
					/* do something */
				}
				res.json(results);
			});
		},
		post: function(req, res) {
			var params = [req.body.username];
			models.profiles.post(params, function(err, results) {
				if (err) {
					/* do something */
				}
				res.sendStatus(201);
			});
		}
	}
};
