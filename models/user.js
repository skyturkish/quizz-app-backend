const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quizs: [{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Quiz',
            autopopulate:{maxDepth:2}
        }]
  });


module.exports = mongoose.model('User',UserSchema)