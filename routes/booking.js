
const {bookingService} = require('../services')

const router = require('express').Router()

router.get('/',async(req,res)=> {
    const bookings = await bookingService.load()

    res.render('bookings',{bookings})
})


router.get('/search',async(req,res)=> {
    const driverId = req.query.driverid

    const bookings = await bookingService.findByDriverId(driverId)
    res.render('bookings',{bookings})
})

router.get('/searchWithDynmicQuery',async(req,res)=> {

    // ama bu yol ile possword ile bile aranabilir o yüzden şu yapılıyor
    //  const origin = req.query.origin
    // const destination = req.query.destination
    // const bookings = await bookingService.query({origin,destinaion})
    //
    const bookings = await bookingService.query(req.query)
    res.render('bookings',{bookings})
})



module.exports = router