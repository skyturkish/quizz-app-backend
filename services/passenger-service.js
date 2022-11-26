const BaseService = require('./base-service')
const Passenger = require('../models/passenger')
const BookingService = require('./booking-service')
const DriverService = require('./driver-service')
class PassengerService extends BaseService {
   async findByName(name){
    return this.findBy('name',name)
   }
   async book(driverId,passengerId,origin,destination){
      console.log('book',...arguments) // == console.log('book',driver,origin,destination) 
      const passenger = await this.find(passengerId)
      const driver = await DriverService.find(driverId)
      
      const booking = await BookingService.insert({driver,passenger,origin,destination})

      passenger.bookings.push(booking)

      await passenger.save()

      return booking
   }
}

module.exports = new PassengerService(Passenger)