var Sequelize = require('sequelize');
var sequelize = new Sequelize('fep', 'root', '', {host : '127.0.0.1', port : '3306', dialect : 'mysql'});
var User = require("./user.js");

var Article = sequelize.define('article', {
	title : Sequelize.STRING,
	content : Sequelize.TEXT,
	tags : Sequelize.STRING,
	cover_image : Sequelize.STRING
});

Article.belongsTo(User, {
	foreignKey : 'user_id',
	targetKey : 'id'
});

module.exports = Article;