const express = require('express')
const router = express.Router()
const {registerUser, 
    loginUser , 
    getme} = require('../controllers/userController')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/getme', getme)

module.exports = router