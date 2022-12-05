const BaseService = require('./base-service')

const Quiz = require('../models/quiz')
const Question = require('../models/question')

class QuizService extends BaseService {

    async addQuestion(quizId,questionText,answerType,choice1,choice2,choice3,choice4,trueChoice){

        console.log(...arguments)

        const quiz = await this.find(quizId)
        
        const answer = Answer.create(answerType,choice1,choice2,choice3,choice4,trueChoice)
        
        const question = Question.create(questionText,answer.createAnswer)


        quiz.questions.push(question) 

        await this.save()             
  
        return quiz
     }
     
  
   
}

module.exports = new QuizService(Quiz)