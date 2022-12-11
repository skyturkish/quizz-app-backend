const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    // can you upload user's name with set operation ?????
    name: {
        type: String,
        required: true
    },
    quizs: [{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Quiz',
            autopopulate:{maxDepth:1}
        }]
  });



UserSchema.plugin(require('mongoose-autopopulate'))

module.exports = mongoose.model('User',UserSchema)