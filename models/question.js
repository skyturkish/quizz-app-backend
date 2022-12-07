const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    questionText: {
        type: String,
        minlength:6
    },
    answerType: {
        type: String,
        enum : ['default','trueOrFalse','freeAnswer'],
        default: 'default'
    },
    choice1 : {
        type:String,
        ref:'Choice',
    },
    choice2 : {
        type:String,
        ref:'Choice',
    },
    choice3 : {
        type:String,
        ref:'Choice',
    },
    choice4 : {
        type:String,
        ref:'Choice',
    },
    trueChoice: {
        type:String,
        ref:'Choice',
    }
  });
  

QuestionSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Question',QuestionSchema)