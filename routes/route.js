var controllers = require('./../controllers/main');

exports.routes = [
	{
		path: '/', 
		type: 'get',
		method: controllers.index.index
	}
];