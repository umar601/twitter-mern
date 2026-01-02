const { default: mongoose } = require("mongoose");


const userSchema = new mongoose.Schema({

    name:{
        type:String,
        // required:true
    },
    post:{
        type:String,
        // required:true
    },
    likes:{
        type:Number,
        // required:true
    },
    shares:{
        type:Number,
        // required:true
    },
    reposts:{
        type:Number
    },
    Comment:{
        type:Array
    }


})


const user = mongoose.model("user",userSchema);

module.exports = {user}