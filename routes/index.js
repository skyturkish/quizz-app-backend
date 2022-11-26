
const router = require('express').Router()

router.get('/',(req,res) => { // request kullanıcıdan gelen istek 
    // res.send('Hello world')// response kullanıcıya döneceğimiz cevap
    //res.sendFile(`${__dirname}/index.html`) ---> html olduğu zaman böyle kullandık
     res.render('index') // neden views  yazmadık çünkü default olarak views'ın altına bakıyor ve .pug yazmadık çünkü yukarıda app.set ile söyledik pug dosyası olduğunu
 })

 module.exports = router