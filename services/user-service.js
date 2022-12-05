const BaseService = require('./base-service')
const QuizService = require('./quiz-service')

const User = require('../models/user')

class UserService extends BaseService {

    async createQuiz(userId){

        console.log('user bulacam')

        const user = await this.find(userId)

        console.log('quiz yaratacam')

            // şunu normal denesene bir ara
        const quiz = await QuizService.insert({owner: user, quizs: []})
  
        console.log('su an buradayım')
        console.log(quiz)
        user.quizs.push(quiz)
  
        await user.save()
  
        return quiz
     }
   
}

module.exports = new UserService(User)