server.get('/bank',displayBanks)

//create a banks
server.post('/bank',createBanks)

//update a banks
server.put('/bank', updateBanks)

//delete a banks
server.delete('/bank', deleteBanks)

