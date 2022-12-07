const router = require('express').Router()
const userService = require('../services/user-service')
const quizService = require('../services/quiz-service')


router.get('/', async(req,res)=> {

    const users = await userService.load()

    res.send(users)
})

router.post('/', async(req,res,next)=> { 

    try {
        const user = await userService.insert(req.body)
        res.send(user) 
        
    } catch (e) {
        next(e) 
    }
})

router.get('/:userId', async(req,res)=> {
    const {userId} = req.params

    const user = await userService.find(userId) 

    if(!user) return res.status(404).send('Cannot find user!')

    res.send(user)

})

router.get('/:userId/quizs', async(req,res)=> {
    const {userId} = req.params

    const user = await userService.find(userId) 

    if(!user) return res.status(404).send('Cannot find user\nquiz!')

    
    res.send(user.quizs)

})

router.post('/:userId/quizs', async(req,res)=> {
    const {userId} = req.params

    const {name} = req.body

    const quiz = await userService.createQuiz(userId,name)
    
    res.send(quiz)

})

router.get('/:userId/quizs/:quizId', async(req,res) => {
    
    const {userId,quizId} = req.params

    const quiz = await quizService.find(quizId) 

    if(!quiz) return res.status(404).send('Cannot find quiz!')

    res.send(quiz)

})

router.post('/:userId/quizs/:quizId', async(req,res) => {
    
    const {userId,quizId} = req.params

    const {questionText,answerType,choice1,choice2,choice3,choice4,trueChoice} = req.body

    const user = await userService.find(userId) 

    if(!user) return res.status(404).send('Cannot find user\nquiz!')

    const quiz = await quizService.addQuestion(quizId,questionText,answerType,choice1,choice2,choice3,choice4,trueChoice)

    res.send(quiz)

})

module.exports = router