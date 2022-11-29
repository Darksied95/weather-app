const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')



forecast(6.5244, 3.3792, (err, res) => {
    console.log('Error', err);
    console.log('Result', res);
})


geocode('Lagos', (err, res) => {
    if (err) throw new Error(err)
    console.log(res)
})


