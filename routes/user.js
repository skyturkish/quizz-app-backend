const router = require('express').Router()
const userService = require('../services/user-service')


router.get('/', async(req,res)=> {

    const users = await userService.load()

    res.send(users)

    // res.render('user')
})

router.get('/:userId', async(req,res)=> {
    const user = await userService.find(req.params.userId) 

    if(!user) return res.status(404).send('Cannot find user!')

    res.send(user)

})

router.get('/:userId/quiz', async(req,res)=> {
    const user = await userService.find(req.params.userId) 

    if(!user) return res.status(404).send('Cannot find user\nquiz!')

    res.send(user.quizs)

})


router.post('/', async(req,res,next)=> { 
    try {
        const user = await userService.insert(req.body)

        res.send(user) 
        
    } catch (e) {
        next(e) 
    }
})

module.exports = router