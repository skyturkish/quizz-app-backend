const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        autopopulate:{maxDepth:2}

    },
    questions: [{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Question',
        }]
  });

module.exports = mongoose.model('Quiz',QuizSchema)