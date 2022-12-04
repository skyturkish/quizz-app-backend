const mongoose = require('mongoose')

const AnswerSchema = new mongoose.Schema({
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

  AnswerSchema.methods.createAnswer = function(){
    answer;
    switch(this.answerType) {   
        case 'default':
            answer = AnswerSchema.create(this)

            return answer;

        case 'trueOrFalse':
            answer = AnswerSchema.create(this.answerType,this.choice1,this.choice2,'','',this.trueChoice)

            return answer; 

        case 'freeAnswer':
            answer = AnswerSchema.create(this.answerType,'','','','',this.trueChoice)

            return answer; 
      }
}

module.exports = mongoose.model('Answer',AnswerSchema)