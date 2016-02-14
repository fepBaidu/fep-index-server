var md5 = require('md5');
var userService = require("../models/service/userService.js");
var responseData = require("../scripts/responseData.js");

exports.login = function(req, res){
	var username = req.body.username;
	var password = md5(req.body.password);
	userService.verifyUser(username, password).then(function(result){
		if(result.length > 0) {
			req.session.user_id = result[0].dataValues.id;
			res.json(responseData('success', {}, {}));
		}
		else {
			res.json(responseData('failed', {}, {}));
		}
	})
};

exports.logout = function(req, res) {
	req.session.user_id = -1;
	res.redirect(req.get('referer'));
}