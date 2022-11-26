const app = require('../..')
const request = require('supertest')(app)


test('create a new booking', async () => {
    const passengerToCreate = {
        name: 'Test passenger',
        location: 'moda'
    }
    const driverToCreate = {
        "name": 'Test Driver',
        "location" : 'moda',
        age:19
    }
    const origin = 'Moda'

    const destination = 'Bostanci'

    const passengerResponse = await request
    .post('/passengers')
    .send(passengerToCreate)
    .expect(200)

    const driverResponse = await request
    .post('/drivers')
    .send(driverToCreate)
    .expect(200)
    
    const bookingResponse = await request
    .post(`/passengers/${passengerResponse._id}/bookings`)
    .send({
        driverId: driverResponse._id,
        origin,
        destination
    })
    .expect(200)
    
    const bookingCreated = bookingResponse.body


    expect(bookingCreated).toMatchObject({
        driver: driverResponse.body,
        passenger: passengerResponse.body,
        origin,
        destination
    })

})

jest.setTimeout(300000);

    // "test": "jest --watchAll --detectOpenHandles"
 // bu aslında package.json'daydı