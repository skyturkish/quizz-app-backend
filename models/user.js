const mongoose = require('mongoose')
const Quiz = require('./quiz')


const UserSchema = new mongoose.Schema({
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