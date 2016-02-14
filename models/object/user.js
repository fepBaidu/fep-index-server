var Sequelize = require('sequelize');
var sequelize = new Sequelize('fep', 'root', '', {host : '127.0.0.1', port : '3306', dialect : 'mysql'});

var User = sequelize.define('user', {
	username: Sequelize.STRING,
	password: Sequelize.STRING
});

module.exports = User;