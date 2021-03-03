const bcrypt = require('bcryptjs') 
const { User } = require('../model/user')
const jwt = require('jsonwebtoken')

const loginController = async(req,res) => {
    const {email,password} = req.body
    try {
      const user = await User.findOne({email})
      if(!user) return res.json({message: 'user not found'})
      let hashed = user.password;
      console.log(hashed,password)
      let isAuth = bcrypt.compareSync(password, hashed); 
      if(isAuth) {
        const token = jwt.sign({
          name: user.username,
          email: user.email,
          _id: user._id,
          expiresIn: '1hr'
        },'youcangenerateajwtkeyonyourown')
        return  res.json({message:'logged In',token}) 
      } else {
        return res.json('passwords do not match')
      } 
    } catch (error) {
      console.log(error)
    }
 

}

module.exports = {loginController}