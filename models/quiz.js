const mongoose = require('mongoose')

const QuizSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // if you dont want to autopopulate => autopopulate: false
        // you can also just delete, you dont have to write => autopopulate: false
        autopopulate:{maxDepth:1}

    },
    questions: [{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Question',
        }]
  });

QuizSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('Quiz',QuizSchema)
