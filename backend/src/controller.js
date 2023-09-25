const express = require("express");
const creating = require('./sequelize/models/index');

const table = creating.employeetable;
const { Op } = require('sequelize')




const getusers = async (req,res)=>{
    try{
        const displaydata = await table.findAll()
        res.send(displaydata);
    }
    catch(error){
        console.log(error)
    }
}


module.exports ={getusers}
