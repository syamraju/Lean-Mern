const asyncHandler = require('express-async-handler')
const Goal = require('../model/goalmodel')
/* Get Goals*/
const getGoals = asyncHandler(async(req,res) =>{
    const goals = await Goal.find()
    res.status(200).json(goals)
    }) 

/* Create Goals*/
const createGoals = asyncHandler(async(req,res) =>{
    if(!req.body.text){
        res.status(400)
        throw new Error('please enter a text field')
    }

    const goals = await Goal.create({
        text: req.body.text
    })
    res.status(200).json(goals)
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