const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quizs: [{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Quiz'
        }]
  });


  UserSchema.methods.addNewQuiz = async function(quiz){

    this.quizs.push(quiz) 

    await this.save()
    
    return quiz
}


module.exports = mongoose.model('User',UserSchema)