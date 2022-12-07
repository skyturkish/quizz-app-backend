const router = require('express').Router()
const quizService = require('../services/quiz-service')

router.get('/',async (req,res) => {

    const quizs = await quizService.load()

    res.send(quizs)

})


router.get('/:quizId',async (req,res) => {
    const {quizId} = req.params

    const quiz = await quizService.find(quizId) 

    if(!quiz) return res.status(404).send('Cannot find quiz!')

    res.send(quiz)
})


module.exports = router