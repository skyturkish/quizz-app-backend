const BaseService = require('./base-service')
const QuizService = require('./quiz-service')

const User = require('../models/user')

class UserService extends BaseService {

    async createQuiz(userId){

        console.log(...arguments)

        const user = await this.find(userId)

        console.log(user)


        const quiz = await QuizService.insert({owner: user, quizs: []})

        console.log(quiz)

        user.quizs.push(quiz);
        
        await user.save()


        return user.quizs
     }
   
}

module.exports = new UserService(User)