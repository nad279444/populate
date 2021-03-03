const {loginController} = require('../controllers/loginController')
const express = require('express')
const router = express.Router()
const {check,body} = require('express-validator')

router.post('/login',[
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
    ],loginController)
    
module.exports = router  

   