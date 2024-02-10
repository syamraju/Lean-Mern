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
    const goal = await Goal.findById(req.params.id)

    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{new : true,})
    res.status(200).json(updateGoal)
    }) 

/* Get Goals*/
const deleteGoals = asyncHandler(async(req,res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error('goal not found')
    }

    await Goal.deleteOne()
    res.status(200).json({id: req.params.id})
    }) 

module.exports = {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals

}