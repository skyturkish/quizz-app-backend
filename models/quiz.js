const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // if you dont want to autopopulate => autopopulate: false
        autopopulate:{maxDepth:1}

    },
    // why required = true will be problem ?
    // when const quiz = await QuizService.insert({owner: user,name: quizName, quizs: []})
    // ????????????
    name: String,
    
    questions: [{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Question',
        }]
  });

QuizSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Quiz',QuizSchema)