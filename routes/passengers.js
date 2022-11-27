
const {passengerService} = require('../services')

const router = require('express').Router()

// dönen hataları burada handle ediyruz
router.post('/', async (req,res,next) => {
try {
    const passenger = await passengerService.insert(req.body)
    res.send(passenger) // göndermezsek sonuna kadar while kalabilir :lotohmm
} catch (e) {
    next(e) // burada diyoruz ki bir hata çıkarsa bu hata kodunu bir sonraki gösterilecek şeye ver 
    // ki uygulama crash yemesin ve handle alabilelim  , hata kodunu alabililem
    // şimdi 500 Internal server error atıyhor ama diğer sefer ERROR yazıyordu ben bunu 2 tarafta da kullanamam
}


    // const passenger = Passenger.create(req.body) // base-service'de dedikki gelen şey passenger objesi ile direkt işle, değilse ona dönüştür öyle işle
    // await passengerService.insert(passenger) // böylece burada passenger objesi oluşturmak zorunda kalmadık

})



router.delete('/:passengerId', async(req,res)=> {
    await passengerService.removeBy('_id',req.params.passengerId)

    res.send('OK')
})

router.post('/:passengerId/bookings', async(req,res)=> { // bu fonksiyonun adı request handle
    const {passengerId} = req.params
    const {driverId,origin,destination} = req.body


    const booking = await passengerService.book(driverId,passengerId,origin,destination)

    res.send(booking) // bunu neden geriye döndürüyoruz ?????????, res.send'e bakabilirsin


    // const passenger = await passengerService.findBy("id",req.params.passengerId)
    // const driver = await driverService.findBy("id",req.query.driverId)

    // passenger.book(driver,req.query.origin,req.query.destination)

    // await passengerService.update(passenger) // url üzerinden query olarak da alabiliyoruz ya da body ile de alabilyioruz, burası query ile aldığımız yer 

    // res.send(flatted.stringify(passenger))
})

router.get('/',async (req,res) => {
    const passengers = await passengerService.load()
    res.render('passengers', {passengers})
    
    // res.send(flatted.stringify(passengers))
})

router.get('/:passengerId', async (req,res)=>{
    const passenger = await passengerService.find(req.params.passengerId)// params url'den gelen, body gönderdiğimizi
    if(!passenger) return res.status(404).send('Cannot find passenger') // önce hata mesajı sonra body
                        // res.sendStatus(404) isteği sonlandırıyor
    res.render('passenger',{passenger})
})

router.patch('/:passengerId',async(req,res) => {
    const { name } = req.body

    await passengerService.update(req.params.passengerId,{name})

    res.send("oldu")
})

module.exports = router