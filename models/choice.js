const mongoose = require('mongoose')
const options = { discriminatorKey: 'kind' }


const choiceSchema = new mongoose.Schema({},options);

const Choice = mongoose.model('Choice', choiceSchema);

const trueOrFalseChoiceSchema = new mongoose.Schema({ choice1: Boolean, choice2: Boolean }, options)

const trueOrFalseChoice = Choice.discriminator('TrueOrFalseChoice',trueOrFalseChoiceSchema);

const multipleChoiceChoiceSchema = new mongoose.Schema({ choice1: String, choice2: String, choice3: String, choice4: String, }, options)

const multipleChoiceChoice = Choice.discriminator('MultipleChoiceChoice',multipleChoiceChoiceSchema);

const freeWriteChoiceSchema = new mongoose.Schema({ choice1: String, }, options)

const freeWriteChoice  = Choice.discriminator('FreeWriteChoice',freeWriteChoiceSchema);


module.exports = { Choice, trueOrFalseChoice, multipleChoiceChoice, freeWriteChoice}

