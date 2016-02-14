var User = require('../object/user.js');

var UserService = {
	verifyUser : function(username, password) {
		return User.findAll({
			where : {
				username : username,
				password : password
			}
		}).then(function(result){
			return result;
		});
	},

	verifyUserById : function(user_id) {
		return User.findAll({
			where : {
				id : user_id
			}
		}).then(function(result){
			return result;
		});
	}
}

module.exports = UserService;