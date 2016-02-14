var formidable = require('formidable');
var fs = require('fs');
var responseData = require("../scripts/responseData.js");

exports.upload = function(req, res) {
	var form = new formidable.IncomingForm({uploadDir : __dirname + "/../public/images/cover_image"});
	form.encoding = 'utf-8';        //设置编辑
	//form.uploadDir = '/tmp';     //设置上传目录
	form.keepExtensions = true;     //保留后缀
	form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
	form.parse(req, function(err, fields, files) {
		if (err) {
			res.locals.error = err;
			res.json(responseData('failed', {}, {}));
		   	return;        
		 }         
		 var extName = '';  //后缀名
		 switch (files.file.type) {
		     case 'image/pjpeg':
		         extName = 'jpg';
		         break;
		     case 'image/jpeg':
		         extName = 'jpg';
		         break;         
		     case 'image/png':
		         extName = 'png';
		         break;
		     case 'image/x-png':
		         extName = 'png';
		         break;         
		 }

		 if(extName.length == 0){
		       res.locals.error = '只支持png和jpg格式图片';
		       res.json(responseData('failed', {}, {}));
		       return;                   
		 }
		 var avatarName = files.file.path.substring(files.file.path.lastIndexOf('/') + 1, files.file.path.length);
		 var path = "/images/cover_image/" + avatarName;
		 
		 res.json(responseData('success', {path: path}, {}));
	});
}