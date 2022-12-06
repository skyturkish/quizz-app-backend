const BaseService = require('./base-service')
const QuizService = require('./quiz-service')

const User = require('../models/user')

class UserService extends BaseService {

    async createQuiz(userId,name){

        console.log('user bulacam')

        const user = await this.find(userId)

        console.log('quiz yaratacam')

                                           // this must be like this ???
        const quiz = await QuizService.insert({owner: user,name: name, quizs: []})
  
        console.log('su an buradayım')
        console.log(quiz)
        user.quizs.push(quiz)
  
        await user.save()
  
        return quiz
     }
   
}

module.exports = new UserService(User)