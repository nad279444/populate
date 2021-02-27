const mongoose = require('mongoose')

const Schema  = mongoose.Schema


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

const Account = mongoose.model('Account', accountSchema)

module.exports = {Account}
