const mongoose = require('mongoose')

const QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required:true,
        minlength:6
    },
    answer : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Answer',
    },
  });

    QuestionSchema.methods.createQuestion = function(answer){

    const question = QuestionSchema.create(this.question,answer)
    
    return question;
}

module.exports = mongoose.model('Question',QuestionSchema)