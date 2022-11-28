const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required:true,
        minlength:6
    },
    choice : {
        type:mongoose.Schema.Types.ObjectId,
        ref:'Choice',
    },
    trueChoice: String
  });

module.exports = mongoose.model('Question',questionSchema)