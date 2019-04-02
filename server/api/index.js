import express from "express"
import {Users, House} from "~/models" 
let router = express.Router()


function getNowTime(){
  let d = new Date()
  let year = d.getFullYear(), m = d.getMonth()+1, day = d.getDate()
  return `${year}-${m}-${day}`
}

let initalData = {
    status: 1,
    msg: '请求成功！',
    data: null
}
function initFail(){
  return {
    status: 0,
    msg: '请求失败！',
    data: null
  }
}

router.get('/queryhouse', async (req, res)=>{
  
  try{
    let data = await Users.findAll({
      include: [{ model: House}]
    })
    res.send(_.assign({},initalData, {
      data
    }))
  }catch(err){
    console.log(err)
    res.send(initFail())
  }
  
})

router.get('/addhouse', async (req, res)=>{
  try{
    let {username, mobile, room_num, build_num} = req.query
    let data = await Users.create({
      username, 
      mobile,
      createdAt: getNowTime(),
      updatedAt: getNowTime(),
      
    })
    
    let house = await House.create({ 
      userid: data.userid,
      room_num, 
      build_num,
      createdAt: getNowTime(),
      updatedAt: getNowTime(),
    })
    res.send(initalData)
  }catch(err){
    console.log(err)
    res.send(initFail())
  }
})


module.exports = router