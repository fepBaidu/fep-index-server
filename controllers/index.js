var session = require("../scripts/session.js");

exports.index = function(req, res){
	session.login('./build/index', {movePosition : 0}, req, res);
};