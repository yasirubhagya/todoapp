const mongoose = require('mongoose');
const { version } = require('os');

const todoSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    ver:{
        type:Number
    }
})

module.exports = mongoose.model('todo',todoSchema);