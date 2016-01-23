var User = sequelize.define('user', {
	id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true, unique : true},
	username : {type : Sequelize.STRING},
	age : {type : Sequelize.INTEGER},
	gender : {type : Sequelize.STRING}
}, {
	timestamps: false
});