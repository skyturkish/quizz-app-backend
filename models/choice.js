const mongoose = require('mongoose')
const options = { discriminatorKey: 'kind' }

const ChoiceSchema = new mongoose.Schema({},options);

const Choice = mongoose.model('Choice', ChoiceSchema);

const TrueOrFalseChoiceSchema = new mongoose.Schema({ choice1: Boolean, choice2: Boolean }, options)

const trueOrFalseChoice = Choice.discriminator('TrueOrFalseChoice',TrueOrFalseChoiceSchema);

const MultipleChoiceChoiceSchema = new mongoose.Schema({ choice1: String, choice2: String, choice3: String, choice4: String, }, options)

const multipleChoiceChoice = Choice.discriminator('MultipleChoiceChoice',MultipleChoiceChoiceSchema);

const FreeWriteChoiceSchema = new mongoose.Schema({ choice1: String, }, options)

const freeWriteChoice  = Choice.discriminator('FreeWriteChoice',FreeWriteChoiceSchema);


module.exports = { Choice, trueOrFalseChoice, multipleChoiceChoice, freeWriteChoice}

