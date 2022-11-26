
const {driverService} = require('../services')

const router = require('express').Router()


router.post('/', async (req,res) => {
    const driver = await driverService.insert(req.body)

    // const driver = driver.create(req.body) // base-service'de dedikki gelen şey driver objesi ile direkt işle, değilse ona dönüştür öyle işle
    // await driverService.insert(driver) // böylece burada driver objesi oluşturmak zorunda kalmadık

    res.send(driver)
})



router.delete('/:driverId', async(req,res)=> {
    await driverService.removeBy('_id',req.params.driverId)

    res.send('OK')
})

router.get('/',async (req,res) => {
    const drivers = await driverService.load()
    res.render('drivers', {drivers})
    
    // res.send(flatted.stringify(drivers))
})

router.get('/young-drivers',async(req,res) => {

    const drivers= await driverService.findYoungDrivers()
    
    res.render('drivers',{drivers})
})
// yukarıdaki get isteği ile alltaki get isteği aynı /'dan sonra birine id diğerine young-drivers geliyor specific olanı üste alıyoruz çünkü
// alltaki üstte olsana young-drivers'ı id sanıp bir şey getirmez,


router.get('/:driverId', async (req,res)=>{
    const driver = await driverService.find(req.params.driverId) // params url'den gelen, body gönderdiğimizi
    if(!driver) return res.status(404).send('Cannot find driver') // önce hata mesajı sonra body
                        // res.sendStatus(404) isteği sonlandırıyor
    res.render('driver',{driver})
})

router.patch('/:driverId',async(req,res) => {
    const {driverId} = req.params
    const { name } = req.body

    await driverService.update(driverId, {name})
})


module.exports = router