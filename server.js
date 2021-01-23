const express = require('express')
const bodyParser = require('body-parser')



//server using express
const server =  express()

//middlewares
server.use(bodyParser.json)

//database
const banksDB = []

// Bank Model
class BankModel {
    constructor ({name,location,branch,phone,address,accountNumber}) {
                this.name = name,
                this.location = location,
                this.branch = branch,
                this.phone = phone,
                this.address = address,
                this.accountNumber = accountNumber
    }
    save(){
        banksDB.push(this)
        return this
    }
}


//controllers
const displayBanks = (req,res) => {
 //list all banks
}

const createBanks = (req,res) => {
    //create a Bank
    const {name,location,branch,phone,address,accountNumber}  = req.body

    const bank = BankModel({name,location,branch,phone,address,accountNumber})

    bank.save()
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