const express = require('express')
const bodyParser = require('body-parser')



//server using express
const server =  express()

//middlewares
server.use(bodyParser.json)

//database
const banks = []

// Bank Model


//controllers
const displayBanks = (req,res) => {
 //list all banks
}

const createBanks = (req,res) => {
    //create Banks
}

const updateBanks = () => {
    //updateBanks
}

const deleteBanks = () => {
    //delete banks
}
//routes
//view banks
 server.get('/banks',displayBanks)

//create a banks
 server.post('/banks',createBanks)

//update a banks
 server.put('/banks', updateBanks)

//delete a banks
  server.delete('/banks', deleteBanks)






//start server
server.listen(3000,() => console.log('server is ready'))