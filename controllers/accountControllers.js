const {Account} = require('../model/bank')

const createNewAccounts =  async (req,res) => {
    //create new Account
    try{
     const {name,phone,address,accountNumber} = req.body
     const account = new Account({name,phone,address,accountNumber})
     savedAccount = await account.save()
     res.json({message: "create successful", data: savedAccount})
    }catch(err){
      res.json({message: err})
    }
    
    
}

const retrieveAccounts = async(req,res) => {
    //retrieve all accounts
    try{
        const retrievedAllAccounts = await Account.find({}).populate('bankId')
        res.json(retrievedAllAccounts) 
    }catch(err){
        res.json({message: err})
    }
   
   }

module.exports = {createNewAccounts,retrieveAccounts}
