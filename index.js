const express = require('express')
const quizRouter = require('./routes/quiz')
const userRouter = require('./routes/user')
const indexRouter = require('./routes/index')


const bodyParser = require('body-parser') // bodyparser'ı post ile gönderdiğimizde json formartını anlasın diye ekliyoruz

require('./routes/mongo-connection')

const app = express()



app.use(bodyParser.json())

app.set('view engine', 'pug') //--> view engine tanımlıyoruz, çünkü pug gibi bissürü view engine var, express'in bunu bilmesi lazım

app.use('/quiz', quizRouter)
app.use('/user', userRouter)
app.use('/', indexRouter)

module.exports = app