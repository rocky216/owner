import Sequelize from "sequelize"
import defineModel from "~/model/db"
import House from "./House"


const Users = defineModel('ct_user', {
  userid: {type : Sequelize.INTEGER,autoIncrement:true,primaryKey: true},
  username : {type : Sequelize.STRING, allowNull : false},//用户名
  gender : {type : Sequelize.STRING, allowNull : true}//性别
})

Users.sync({force: false}) 

Users.belongsTo(House,  {foreignKey: 'userid'}) //targetKey: 'frendid' {foreignKey: 'userid'}

export default Users