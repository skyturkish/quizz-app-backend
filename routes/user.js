const router = require('express').Router()
const {userService} = require('../services')


router.get('/', async(req,res)=> {
    res.render('user')
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