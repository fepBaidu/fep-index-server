function build(name, value){
	exports[name] = {};

	for(var i in value){
		exports[name][i] = value[i];
	}
};
 
build('index', require('./index'));
build('article', require('./article'));
build('aboutus', require('./aboutus'));
