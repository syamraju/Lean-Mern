 const mongoose = require('mongoose')
 const goalSchema = mongoose.Schema(
        {
            user : {
                type : mongoose.Schema.Types.ObjectId,
                default : true,
                ref : 'User',
            },
            text: {
                type : String,
                required : [true , `please enter numebr`]
            }   
        },
        {   
            timestamps : true,
        }
    )

    module.exports = mongoose.model('Goal', goalSchema)