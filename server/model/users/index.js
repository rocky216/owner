import Sequelize from "sequelize"
import sequelize from "../db"
import User_relation from "../room/index.js"

var User = sequelize.define('ct_user', {
  // id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
  username : {type : Sequelize.STRING, allowNull : false},//用户名
  password : {type : Sequelize.STRING, allowNull : false},//密码
  details : {type : Sequelize.STRING, allowNull : true},//简介
  head_thumb : {type : Sequelize.STRING, allowNull : true},//头像
  gender : {type : Sequelize.STRING, allowNull : true},//性别
  nickname : {type : Sequelize.STRING, allowNull : true},//昵称
  userid : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true}//用户userid
},{
  timestamps:false,
  freezeTableName:true
});

//指定User和User_relation的关系为1：1的关系，设定目标为frendid，即查询中 userid = frendid
User.belongsTo(User_relation,{foreignKey:'userid'}); //,targetKey: 'frendid'




// User.sync()

module.exports = User;



