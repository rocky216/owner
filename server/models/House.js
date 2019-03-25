import Sequelize from "sequelize"
import defineModel from "~/model/db"

const House = defineModel('ct_hosue', {
  id: {type : Sequelize.INTEGER,autoIncrement:true,primaryKey: true},
  userid : {type : Sequelize.INTEGER, allowNull : false},//用户名id
  room_num: {type : Sequelize.STRING, allowNull : true}, //房号
  build_num: {type : Sequelize.STRING, allowNull : true}, //栋号
})

House.sync({force: false})  // 

export default House