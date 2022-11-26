const BaseService = require('./base-service')
const Driver = require('../models/driver')

class DriverService extends BaseService {

   
    async findByDriverName(name){
        return this.findBy('name',name)
    }
    async findByLocation(location){
        return this.findBy('location',location)
    }

    async findYoungDrivers(){
        return this.query({
            age:{
                $lt:30, // 30'dan küçük olanları getir diyoruz ---> less than
                        // büyük olanlar için de buna benzer bir şey vardır
                        // mongodb dökümantasyonu
                $gte:18 // greater than or equal
            }
        })
    }


}

module.exports = new DriverService(Driver)
