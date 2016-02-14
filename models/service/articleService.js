var Article = require('../object/article.js');
var User = require("../object/user.js");

var ArtcleService = {
	insert : function(title, content, user_id, tags, cover_image) {
		return Article.upsert({
			title : title,
			content : content,
			user_id : user_id,
			cover_image : cover_image,
			tags : tags
		}).then(function(result) {
			return result;
		})
	},

	getList : function() {
		return Article.findAll({
			include : {
				model : User
			}
		}).then(function(result){
			return result;
		});
	},

	getArticleById : function(article_id) {
		return Article.findAll({
			where : {
				id : article_id
			},
			include : {
				model : User
			}
		}).then(function(result) {
			return result;
		});
	}
}

module.exports = ArtcleService;