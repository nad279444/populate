const express = require('express')
const router = express.Router()


const {displayBanks,createBanks,updateBanks,deleteBanks} = require('../controllers/bankController')


router.get('/bank',displayBanks)

//create a banks
router.post('/bank',createBanks)

//update a banks
router.put('/bank/:id', updateBanks)

//delete a banks
router.delete('/bank/:id', deleteBanks)

module.exports = router
