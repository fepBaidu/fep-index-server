var express = require("express");
var routes = require("./routes/route");
var services = require("./models/service/mainService");
var app = express();
var router = express.Router();

//routes
app.use('/',router);

/*
app.use(function(req, res){
	console.log('route : ' + req.route);
	if(typeof(req.route) === 'undefined') {
		res.render('./404', {});
	}
});
*/

routes.routes.forEach(function(route){
    if(route.filter){
    	router[route.type](route.path, route.filter, route.method);
    }
    else {
    	router[route.type](route.path, route.method);
    }
});
/***********************************/


app.listen(3000, function () {
  console.log('listen port 3000');
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

var Sequelize = require('sequelize');
var sequelize = new Sequelize('fep', 'root', '', {host : '127.0.0.1', port : '3306', dialect : 'mysql'});