const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  email: String,
  password: String,
  accounts: {
    type: Schema.Types.ObjectId,
    ref: "Account",
  },
});

const User = mongoose.model("User", userSchema);

module.exports =  {User} ;
