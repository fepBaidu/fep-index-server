var session = require("../scripts/session.js");

exports.aboutus = function(req, res){
	session.login('./build/aboutus', {movePosition : 3}, req, res);
};