import Sequelize from "sequelize"
import sequelize from "../db"

var User_relation = sequelize.define('ct_user_relation', {
  id : {type : Sequelize.INTEGER, autoIncrement : true, primaryKey : true},
  userid : {type : Sequelize.STRING, allowNull : false},//用户id
  frendid : {type : Sequelize.STRING, allowNull : false}//朋友id
},{
  timestamps:false,
  freezeTableName:true
});

User_relation.sync()

module.exports = User_relation;