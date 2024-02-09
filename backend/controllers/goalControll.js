const asyncHandler = require('express-async-handler')
/* Get Goals*/
const getGoals = asyncHandler(async(req,res) =>{
    if(!req.body.text){
        res.status(500)
        throw new Error('please fill the field')
    }
    res.status(200).json({message : 'get goals'})
    }) 

/* Create Goals*/
const createGoals = asyncHandler(async(req,res) =>{
    res.status(200).json({message : 'create goals'})
    } )

/* Get Goals*/
const updateGoals = asyncHandler(async(req,res) =>{
    res.status(200).json({message : `update goal ${req.params.id}`})
    }) 

/* Get Goals*/
const deleteGoals = asyncHandler(async(req,res) =>{
    res.status(200).json({message : `delete goal ${req.params.id}`})
    }) 

module.exports = {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals

}