const router = require('express').Router()
const quizService = require('../services/quiz-service')

router.get('/',async (req,res) => {

    const quizs = await quizService.load()

    res.send(quizs)

})

router.post('/', async (req,res) => {
    
})



module.exports = router