const express = require('express')
const passengerRouter = require('./routes/passengers')
const indexRouter = require('./routes/index')
const driverRouter = require('./routes/driver')
const bookingRouter = require('./routes/booking')


const bodyParser = require('body-parser') // bodyparser'ı post ile gönderdiğimizde json formartını anlasın diye ekliyoruz
require('./routes/mongo-connection')

const app = express()

app.use(bodyParser.json())

app.set('view engine', 'pug') //--> view engine tanımlıyoruz, çünkü pug gibi bissürü view engine var, express'in bunu bilmesi lazım

app.use('/passengers', passengerRouter)
app.use('/drivers',driverRouter)
app.use('/booking',bookingRouter)
app.use('/', indexRouter)



module.exports = app