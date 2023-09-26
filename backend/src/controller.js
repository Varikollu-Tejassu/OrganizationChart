const express = require("express");
const creating = require('./sequelize/models/index');

const employeetable = creating.employeetable;
const { Op } = require('sequelize')




const getusers = async (req,res)=>{
    try{
        const displaydata = await employeetable.findAll()
        res.send(displaydata);
    }
    catch(error){
        console.log(error)
    }
}

const addusers = async (req,res)=>{
    try{
    var employee={
  employeeName:req.body.employeename,
  positionName:req.body.role,
  department:req.body.department,
  parentId:req.body.manager
    }
    created_user = await employeetable.create(employee);
    res.status(201).json(created_user);
    }catch (error) {

        console.error('Error creating user:', error);
      
        res.status(500).json({ error: 'Internal server error' });
      
      }
      
      };


module.exports ={getusers,addusers}
