require("dotenv").config()
const express = require('express')
const sq = require("./db")
const modules = require("./models/models")
const fileUpload  = require('express-fileupload')
const cors = require('cors')
const ErrorHandlingMiddleware = require('./Middleware/ErrorHandlingMiddleware')
const path =  require('node:path');
const router = require("./routers/index")


const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(express.json());
app.use(express.static(path.resolve(__dirname,'static')));
app.use(fileUpload({}));
app.use('/api',router);
app.use(ErrorHandlingMiddleware);


const start = async() => {
    try {
        await sq.authenticate()
        await sq.sync()
        app.listen(PORT,() => console.log(`сервер запущен по порту ${PORT}`)) 
    } catch (error) {
        console.log(error.message)
    }
}

start();