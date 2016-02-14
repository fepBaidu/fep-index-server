function build(name, value){
	exports[name] = {};

	for(var i in value){
		exports[name][i] = value[i];
	}
};
 
build('log', require('./log'));
build('article', require('./article'));
build('form', require('./form'));
