const app = require('../..')
const request = require('supertest')(app)


test.skip('create a new passengers', async () => {
    const passengerToCreate = {
        name: 'Test passenger',
        location: 'moda'
    }
    const response = await request
    .post('/passengers')
    .send(passengerToCreate)
    .expect(200)

    console.log('do they match', response.body.passengerToCreate)

    passengerToCreate.bookings = ['hello']

   // expect(response.body).toMatchObject(passengerToCreate)

    expect(passengerToCreate.bookings).toEqual(['hello'])


})


    // "test": "jest --watchAll --detectOpenHandles"
 // bu aslında package.json'daydı