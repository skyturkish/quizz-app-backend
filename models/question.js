const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required:true
    },
    answer1: {
        type: String,
        required:true
    },answer2: {
        type: String,
        required:true
    },answer3: {
        type: String,
        required:true
    },answer4: {
        type: String,
        required:true
    },
    trueAnswer: {
        type: Number
    },
    
    name: String,
    location: String,
    age:{
        type:Number,
        required:true,
        min:18
    }
})
module.exports = mongoose.model('Question',QuestionSchema)
