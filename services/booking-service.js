const BaseService = require('./base-service')
const Booking = require('../models/booking')

class BookingService extends BaseService {
    async findByPassengerId(passengerId){
        return this.findBy('passenger',passengerId)
    }
                                                        // findBy diyerek bu 2'sini kolaylaştırdık
    async findByDriverId(driverId){
        return this.findBy('driver',driverId)
    }


}

module.exports = new BookingService(Booking)
