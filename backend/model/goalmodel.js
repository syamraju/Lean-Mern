 const mongoose = require('mongoose')
 const goalSchema = mongoose.Schema(
        {
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