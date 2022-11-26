

function printBooking(booking){    
    console.log(`${booking.passenger.name} booked ${booking.driver.name} to travel from ${booking.origin} to ${booking.destination}`)
}

function printBookingHistory(passenger){
    if(passenger.bookings.length == 0)
        return console.log('has no bookings yet')
    passenger.bookings.forEach(printBooking) // map her elemanı transform etmek için kullanılıyor
} 

module.exports = printBookingHistory



// module.exports = {
//     sum: (a,b) => a + b,
//     subtract:(a,b) => a - b,
//     multiply:(a,b) => a*b
// }