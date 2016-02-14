var express = require("express");
var routes = require("./routes/route");
var services = require("./models/service/mainService");
var cookieParser = require("cookie-parser");
var multer = require("multer");
var ueditor = require("ueditor");
var session = require('express-session');
var path = require('path');

var app = express();
var router = express.Router();

app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized : false
}));

//body-parser
var upload = multer();

//routes
app.use('/',router);

/*
app.use(function(req, res){
	if(typeof(req.route) === 'undefined') {
		res.render('./404', {});
	}
});
*/

router.all("/ueditor/ue", ueditor(path.join(__dirname, 'public'), function(req, res, next) {
    // ueditor 客户发起上传图片请求
    if (req.query.action === 'uploadimage') {
        var foo = req.ueditor;
        var date = new Date();
        var imgname = req.ueditor.filename;

        var img_url = '/images/ueditor/';
        res.ue_up(img_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = '/images/ueditor/';
        res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
        }
        // 客户端发起其它请求
        else {
            res.setHeader('Content-Type', 'application/json');
            res.redirect('/ueditor/nodejs/config.json');
        }
}));

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
