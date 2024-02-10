const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name : {
        type : String, 
        default : [true, 'ENter a name ']
    },

    email : {
        type : String, 
        default : [true , 'enter a email']
    },

    password : {
        type : String, 
        default : [true , ' enter a password']
    }


},
{
    timestamps : true
})

module.exports = mongoose.model('User',userSchema)