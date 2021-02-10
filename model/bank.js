const mongoose = require('mongoose')

const{ Schema } = mongoose

const bankSchema = new Schema({
    accounts:{
        type: Schema.Types.ObjectId,
        ref: "Account"
      },
    location:String,
    branch: String,
    
    
})

const accountSchema = new Schema({
    name: String,
    phone: Number,
    address:String,
    accountNumber:Number,
    bankId: {
        type: Schema.Types.ObjectId,
        ref: "Bank"
    }
})

const Bank = mongoose.model('Bank', bankSchema)
const Account = mongoose.model('Account', accountSchema)


module.exports = {Bank,Account}






















// class BankModel {
//     constructor ({name,location,branch,phone,address,accountNumber}) {
//                 this.name = name;
//                 this.location = location;
//                 this.branch = branch;
//                 this.phone = phone;
//                 this.address = address;
//                 this.accountNumber = accountNumber;
//     }
//     save(){
//         banksDb.push(this)
//         return this
//     }
    
//     static all(){
//         return banksDb
//     }
//     static update(updateInfo = {}){
//         //target the bank to update
//         banksDb = banksDb.map(bank => {
//             if(bank.name === updateInfo.name){
//                 return {...bank,...updateInfo}
//             }
//             return bank
//         })

//     }
//     static delete({name}){
//         let deletedBank = null
//         banksDb.filter(bank => {
//             if(bank.name !== name){
//                 deletedBank = bank
//                 return true
//             }
//             return false
//         })
//         return deletedBank
//     }
// }

