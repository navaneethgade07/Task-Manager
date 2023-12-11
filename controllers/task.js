// Functionalites

// importing the models
const Task = require('../models/Task');

const getAllTasks = async (req,res) =>{
    // res.send('get all the Tasks')
    try {
        const task = await Task.find({});
        res.json({task})
    } catch (error) {
        res.status(500).json({msg: error});
    }
};

const createTasks = async (req,res) =>{
    // res.send('create the Tasks')
    try {
        const task = await Task.create(req.body);
        res.json({task});        
    } catch (error) {
        res.status(500).json({msg: error});
    }
};

const getTasks= async (req,res) =>{
    try {
        // const {nameId} = req.params
        // res.json({nameId});
        const task  = await Task.findOne({name:req.params.name});
        // res.json({task});
        if(task){
            res.json({task});
        }
        else{
            res.status(404).json({msg:`Not Found`})
        }
    } catch (error) {
        res.status(500).json({msg:error});
    }
    // res.send('get single task')
    // res.json({id:req.params.name});
};
const updateTasks = async(req,res) =>{
    try {
        const task  = await Task.updateOne({name:req.params.name},req.body);
        res.json({task});
    } catch (error) {
        res.status(500).json({msg:error});
    }
    // res.send('update the Tasks')
};
const deleteTasks = async(req,res) =>{
    try {
        const task  = await Task.deleteOne({name:req.params.name});
        
        if(task){
            res.json({task});
        }
        else{
            res.status(404).json({msg:`Not Found`})
        }

    } catch (error) {
        res.status(500).json({msg:error});
    }
    // res.send('delete the Tasks')
};

module.exports = {
    getAllTasks,createTasks,getTasks,updateTasks,deleteTasks
}