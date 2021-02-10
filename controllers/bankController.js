const {Bank} = require('../model/bank')

const displayBanks = async(req,res) => {
    //list all banks
    try{
        const retrievedAllBanks = await Bank.find({})
        res.json(retrievedAllBanks) 
    }catch(err){
        res.json({message: err})
    }
   
   }
   
   const createBanks =  async (req,res) => {
       //create a Bank
       try{
        const {location,branch} = req.body
        const bank = new Bank({location,branch})
        savedBank = await bank.save()
        res.json({message: "create successful", data: savedBank})
       }catch(err){
         res.json({message: err})
       }
       
       
   }
   
 const updateBanks =  async (req,res) => {
       //updateBanks
       try{
            
            const {id} = req.params
            const updatedBank = await Bank.findByIdAndUpdate( id,{location,branch},{
                new:true,
                runValidators:true
            })
            res.json({message: "update successful", data: updatedBank})
        }catch(err){
            res.json({message: err})
        }
       
       
   }
   
   const deleteBanks = async (req,res) => {  
       //delete banks
      try{
        const {id} = req.params
        const deletedBank = await Bank.findByIdAndDelete(id)
        res.json({message: "delete successful", data: deletedBank})
      }catch(err){
        res.json({message: err})
      }
      
   
       
   }

   module.exports = {
       displayBanks,
       createBanks,
       updateBanks,
       deleteBanks
   }