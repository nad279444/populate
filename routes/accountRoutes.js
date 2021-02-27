const express = require('express')
const router = express.Router()
const {body} = require('express-validator')

const {createNewAccounts,retrieveAccounts} = require("../controllers/accountControllers")

//routes for accounts
router.post('/bank/account',

body('name').isLength({min:2}),
body('phone').isInt({max: 10}),
body('address').isAlphanumeric(),
body('accountNumber').isInt(),

createNewAccounts)
router.get('/bank/account',retrieveAccounts)

module.exports = router