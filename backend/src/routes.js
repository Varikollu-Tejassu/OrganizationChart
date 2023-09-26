
const express = require('express')
const {getusers,addusers} = require('./controller')



var router = express.Router();


router.use('/getusers' ,getusers)

router.post('/addusers',addusers)



module.exports=router;