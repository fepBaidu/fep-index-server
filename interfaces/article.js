var articleService = require("../models/service/articleService.js");
var responseData = require("../scripts/responseData.js");

function queryParam(url){
	url = url.substring(url.indexOf("?") + 1, url.length);
    var pairArray = url.split('&');
    var result = {};
    pairArray.forEach(function(element){
        var pair = element.split('=');
        if (pair.length == 2) {
            var key = pair[0];
            var value = pair[1];
            result[key] = value;
        }
    });
    return result;
}

exports.getAllArticles = function(req, res) {
	articleService.getList().then(function(result) {
		res.json(responseData('success',result, {}));
	});
};

exports.getArticleById = function(req, res) {
	var urlParams = queryParam(req.url);
	console.log(req.url);
	console.log(urlParams);
	var article_id = urlParams['article_id'];
	console.log('article_id : ' + article_id);
	articleService.getArticleById(article_id).then(function(result) {
		res.json(responseData('success',result, {}));
	});
};

exports.deploy = function(req, res) {
	articleService.insert(req.body.title, req.body.content, req.session.user_id, req.body.tag, req.body.cover_image).then(function(result){
		if(result) {
			res.json(responseData('success', {}, {}));
		}
		else {
			res.json(responseData('failed', {}, {}));	
		}
	});
}

