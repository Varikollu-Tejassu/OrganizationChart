
const express = require('express')
const {getusers} = require('./controller')



var router = express.Router();


router.use('/getusers' ,getusers)



module.exports=router;