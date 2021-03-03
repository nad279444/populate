const  mongoose = require("mongoose")
const express = require('express')
const accountRouter = require('./routes/accountRoutes')
const bankRouter = require('./routes/bankRoutes')
const signupRouter = require("./routes/signupRoutes")
const loginRouter = require('./routes/loginRoutes')



const bodyParser = require('body-parser')


const server =  express()

//middlewares
server.use(bodyParser.json())
server.use(accountRouter)
server.use(bankRouter)
server.use(signupRouter)
server.use(loginRouter)




mongoose.connect("mongodb+srv://nad:kawhi002@cluster0.r4xbj.mongodb.net/Bank", {useNewUrlParser: true, useUnifiedTopology: true});




//server using express


server.listen(3000,() => console.log('server is ready'))