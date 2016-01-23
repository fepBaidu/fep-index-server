exports.index = function(req, res){

	res.render('./build/index', {content : 'Hello Index'});
};