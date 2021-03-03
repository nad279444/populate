const express = require('express')
const router = express.Router()
const {body,check} = require('express-validator')
const { User } = require("../model/user")




const {createNewUsers,getAllUsers} = require("../controllers/userController")

//routes for users
router.post('/signup',[
body('username'),
body('email').custom(async (email) => {
  const user = await User.findOne({email})
  if(user){
    return Promise.reject('Email already in use')
  }
})
  .not()
  .isEmpty()
  .isEmail()
  .withMessage('must be an email'),
check('password')
  .not()
  .isEmpty()
  .isLength({min:7})
  .withMessage('password must be at least 7 characters long'),
],
createNewUsers)


router.get('/users',getAllUsers)

module.exports = router