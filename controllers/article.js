var session = require("../scripts/session.js");

exports.list = function(req, res){
	session.login('./build/article', {movePosition : 1}, req, res);
};

exports.create = function(req, res) {
	session.login('./build/createArticle', {movePosition : 1}, req, res, 1);
};

exports.detail = function(req, res) {
	session.login('./build/articleDetail', {movePosition : 1, articleId : req.params.article_id}, req, res);
}