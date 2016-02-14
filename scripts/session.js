var userService = require("../models/service/userService.js");

module.exports = {
	login : function(module, data, req, res, needLogin) {
		console.log(req.session);
		var user_id = req.session.user_id;
		userService.verifyUserById(user_id).then(function(result){
			if(result.length > 0) {
				data.isLogin = true;
				data.username = result[0].dataValues.username;
				res.render(module, data);
			}
			else {
				data.isLogin = false;
				data.username = "";
				if(needLogin) {
					res.redirect('/');
				}
				else {
					res.render(module, data);
				}
			}
		})
	}
}