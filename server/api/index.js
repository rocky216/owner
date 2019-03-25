import express from "express"
import {Users, House} from "~/models" 
let router = express.Router()


router.get('/sequelize', async (req, res)=>{

  try{
    let data = await Users.findAll({
      include: [{ model: House}]
    })
    res.send(data)
  }catch(err){
    console.log(err)
    res.send({msg: '请求失败'})
  }
  
})


module.exports = router