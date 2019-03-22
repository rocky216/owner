let path = require("path")
import express from "express"
require('dotenv').config()

let ejs = require('ejs');
let app = express()




app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');


app.get('/', (req, res)=>{
  res.render('index')
})

app.listen(process.env.PORT, ()=>{})
