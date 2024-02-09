
/* Get Goals*/
const getGoals = (req,res) =>{
    if(!req.body.text){
        res.status(500).json({message : 'please add field'})
    }
    res.status(200).json({message : 'get goals'})
    } 

/* Create Goals*/
const createGoals = (req,res) =>{
    res.status(200).json({message : 'create goals'})
    } 

/* Get Goals*/
const updateGoals = (req,res) =>{
    res.status(200).json({message : `update goal ${req.params.id}`})
    } 

/* Get Goals*/
const deleteGoals = (req,res) =>{
    res.status(200).json({message : `delete goal ${req.params.id}`})
    } 

module.exports = {
    getGoals,
    createGoals,
    updateGoals,
    deleteGoals

}