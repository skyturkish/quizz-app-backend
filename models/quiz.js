const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        autopopulate:{maxDepth:1}

    },
    questions: [{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Question',

        }]
  });

module.exports = mongoose.model('Quiz',QuizSchema)