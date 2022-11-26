const printBookingHistory = require('../print-booking-history')


test.skip('prints passenger bookings',() => {
    const passenger = {
        bookings:[{
            passenger:{name:'Armagan'},
            driver:{name:'Stefan'},
            origin:'Kreuzberg',
            destination:'Neuko'
        }]
    }
    const consoleSpy = jest.spyOn(console, 'log')

    printBookingHistory(passenger)

    expect(consoleSpy).toHaveBeenCalledWith('Armagan booked Stefan to travel from Kreuzberg to Neuko')

    consoleSpy.mockRestore()
})
