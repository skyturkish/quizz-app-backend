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
        type:String
    },
    choice2 : {
        type:String
    },
    choice3 : {
        type:String
    },
    choice4 : {
        type:String
    },
    trueChoice: {
        type:String
    }
  });
  

QuestionSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Question',QuestionSchema)