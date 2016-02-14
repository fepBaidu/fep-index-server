var controllers = require('../controllers/main');
var interfaces = require('../interfaces/main');
var bodyParser = require("body-parser");

exports.routes = [
	//页面路由
	{
		path : '/', 
		type : 'get',
		method : controllers.index.index
	},

	{
		path : '/article',
		type : 'get',
		method : controllers.article.list
	},

	{
		path : '/createArticle',
		type : 'get',
		method : controllers.article.create
	},

	{
		path : '/articleDetail/:article_id',
		type : 'get',
		method : controllers.article.detail
	},

	{
		path : '/aboutus',
		type : 'get',
		method : controllers.aboutus.aboutus	
	},

	//接口路由
	{
		path : '/login',
		type : 'post',
		filter : [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
		method : interfaces.log.login
	},

	{
		path : '/logout',
		type : 'get',
		method : interfaces.log.logout
	},

	{
		path : '/getAllArticles',
		type : 'get',
		method : interfaces.article.getAllArticles
	},

	{
		path : '/getArticleById',
		type : 'get',
		filter : [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
		method : interfaces.article.getArticleById
	},

	{
		path : '/deploy',
		type : 'post',
		filter : [bodyParser.json(), bodyParser.urlencoded({ extended: true })],
		method : interfaces.article.deploy
	},

	{
		path : '/upload',
		type : 'post',
		method : interfaces.form.upload
	}
];