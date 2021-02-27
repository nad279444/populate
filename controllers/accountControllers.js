const {Account} = require('../model/account')
const {validationResult} = require('express-validator')

const createNewAccounts =  async (req,res) => {
    //create new Account
    try{
     const {name,phone,address,accountNumber, bankId} = req.body
     const account = new Account({name,phone,address,accountNumber, bankId})
     savedAccount = await account.save()
     res.json({message: "create successful", data: savedAccount})
    }catch{
        const errors = validationResult(req)
        if(!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
      
    }
    
    
}

const retrieveAccounts = async(req,res) => {
    //retrieve all accounts
    try{
        const retrievedAllAccounts = await Account.find({}).
        populate('bankId');
        res.json(retrievedAllAccounts) 
    }catch(err){
        res.json({message: err})
    }
   
   }

module.exports = {createNewAccounts,retrieveAccounts}
