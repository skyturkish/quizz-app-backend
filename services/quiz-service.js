const BaseService = require('./base-service')
const Quiz = require('../models/quiz')
const Question = require('../models/question')
const QuestionService = require('./question-service.js')

class QuizService extends BaseService {

    async addQuestion(quizId,questionText,answerType,choice1,choice2,choice3,choice4,trueChoice){

        console.log(...arguments)

        const quiz = await this.find(quizId)

        let question = ''
        // why service do this ? not one of the duties of the service ?
        switch (answerType) {
            case 'default':
                question = await QuestionService.insert({questionText: questionText,answerType: answerType,choice1: choice1,choice2: choice2,choice3 :choice3,choice4: choice4,trueChoice: trueChoice})
                break;
            case 'trueOrFalse':
                question = await QuestionService.insert({questionText: questionText,answerType: answerType,choice1: 'True',choice2: 'False',trueChoice: trueChoice})
                break;
            case 'freeAnswer':
                question = await QuestionService.insert({questionText: questionText,answerType: answerType,trueChoice: trueChoice})
                break;
          }
          
        quiz.questions.push(question) 
        
        await quiz.save()             
  
        return quiz
     }
}
module.exports = new QuizService(Quiz)