var controllers = require('./../controllers/main');

exports.routes = [
	{
		path: '/', 
		type: 'get',
		method: controllers.index.index
	},

	{
		path: '/article_detail',
		type : 'get',
		method: controllers.article.detail
	}
];