const Booking = require('./booking')

const mongoose = require('mongoose')

const PassengerSchema = new mongoose.Schema({
    name: {
        type:String, 
        required:true, 
        minlength:2
    },

    location: String,

    bookings : [{
        type:mongoose.Schema.Types.ObjectId,// içine sadece ObjectId yazıyorsun
        ref:'Booking',                      //sonra tipini belirtiyhorsun o kendi içinde find.(object id )yapıyor
        autopopulate:{maxDepth:2}
    }] 
})

PassengerSchema.methods.book = async function(driver,origin,destination){
    console.log('book',...arguments) // == console.log('book',driver,origin,destination) 
    const booking =await Booking.create({driver,passenger:this,origin,destination})


    this.bookings.push(booking) // pushladın sonra da kaydetmen lazım 
    await this.save()

    return booking
}

PassengerSchema.plugin(require('mongoose-autopopulate'))

module.exports =mongoose.model('Passenger',PassengerSchema)



// class Passenger{
//     constructor(id = uuid.v4(),name,location, bookings = []){ // bir passenger yaratılırken hali hazırda bir bookings olması mümkün değil
//         this.id = id    // parametreler en sona eklenmeli çünkü boş bırakıp default değer almalarını sağlıyoruz bazen
//         this.name = name // en başa eklemek sağlıklı değil
//         this.location =  location
//         this.bookings = bookings
//     }   
//     book(driver,origin,destination){ // bu bundan ürettiğimiz class nesnelerinin özelliği armagan.book
//  
//     }
//     static create({id, name,location,bookings}){ // BU ise sınıf üzerinden direkt çağırabiliyoruz Passenger.create 
//         return new Passenger(id,name,location,bookings)
//     }
    
// }

// module.exports = Passenger