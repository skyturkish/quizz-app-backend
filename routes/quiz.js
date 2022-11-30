const router = require('express').Router()

router.get('/',async (req,res) => {
    res.send("Su an quizleri görüyorsun gibi")

})

router.post('/', async (req,res) => {
    
})



module.exports = router