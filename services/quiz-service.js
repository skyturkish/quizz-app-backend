const BaseService = require('./base-service')
const Quiz = require('../models/quiz')
const Question = require('../models/question')
const QuestionService = require('./question-service.js')

class QuizService extends BaseService {

    async addQuestion(quizId,questionText,answerType,choice1,choice2,choice3,choice4,trueChoice){

        console.log(...arguments)

        const quiz = await this.find(quizId)
    
        const question = await QuestionService.insert({questionText: questionText,answerType: answerType,choice1: choice1,choice2: choice2,choice3 :choice3,choice4: choice4,trueChoice: trueChoice})

        quiz.questions.push(question) 
        
        await quiz.save()             
  
        return quiz
     }
}
module.exports = new QuizService(Quiz)