const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required:true,
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
        required: true
    },
    choice2 : {
        type:String,
        ref:'Choice',
        required: true
    },
    choice3 : {
        type:String,
        ref:'Choice',
        required: true
    },
    choice4 : {
        type:String,
        ref:'Choice',
        required: true
    },
    trueChoice: {
        type:String,
        ref:'Choice',
        required: true
    }
  });

    QuestionSchema.methods.createQuestion = function(answer){
        switch(this.answerType) {   
            case 'default':
                question = QuestionSchema.create(this)
    
                return question;
    
            case 'trueOrFalse':
                question = QuestionSchema.create(this.question,this.answerType,this.choice1,this.choice2,'','',this.trueChoice)
    
                return question; 
    
            case 'freeAnswer':
                question = QuestionSchema.create(this.question,this.answerType,'','','','',this.trueChoice)
    
                return question; 
          }    
}

module.exports = mongoose.model('Question',QuestionSchema)