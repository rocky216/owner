let path = require("path")
import express from "express"
import _ from "lodash"
var bodyParser = require('body-parser');
require('dotenv').config()

let ejs = require('ejs');
let app = express()

global._ = _;

bodyParser.urlencoded({ extended: false })

let staticpath = path.join(__dirname, '/public')

app.use(express.static( staticpath ))



app.use('/api', require("~/api"))

require("~/models")


app.set('views', path.join(__dirname, 'views'));
app.engine('html', ejs.__express);
app.set('view engine', 'html');

require("~/routers")(app)

app.listen(process.env.PORT, ()=>{})
