const  mongoose = require("mongoose")
const express = require('express')
const bodyParser = require('body-parser')
const {displayBanks,createBanks,updateBanks,deleteBanks} = require('./controllers/bankController')
const {createNewAccounts,retrieveAccounts} = require("./controllers/accountControllers")
const server =  express()

//middlewares
server.use(bodyParser.json())



mongoose.connect("mongodb+srv://nad:kawhi002@cluster0.r4xbj.mongodb.net/Bank", {useNewUrlParser: true, useUnifiedTopology: true});


server.get('/bank',displayBanks)

//create a banks
server.post('/bank',createBanks)

//update a banks
server.put('/bank/:id', updateBanks)

//delete a banks
server.delete('/bank/:id', deleteBanks)

//routes for accounts
server.post('/bank/account',createNewAccounts)
server.get('/bank/account',retrieveAccounts)
//server using express


server.listen(3000,() => console.log('server is ready'))