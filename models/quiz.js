const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    ownerId: {
        type: String
    },
    questions: [{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Question'
        }]
  });


  QuizSchema.methods.addQuestion = async function(question){

    this.questions.push(question) 

    await this.save()
    
    return question
}


module.exports = mongoose.model('Quiz',QuizSchema)