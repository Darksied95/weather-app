const request = require('request');
const geocode = require('./utils/geocode')

const url = 'http://api.weatherstack.com/current?access_key=9408cd64ecc47f8960b0391b0e503d7d&query=6.5244,3.3792'



request({ url, json: true }, (err, res) => {
    if (err) {
        console.log('Unable to connect to weather API')
    } else if (res.body.error) {
        console.log('Unable to find location');
    }
    else {
        const { temperature, feelslike } = res.body.current
        console.log(`It's currently ${temperature} degress outside but it feels like ${feelslike} degrees`);
    }
})



geocode('Lagos', (err, res) => {
    if (err) throw new Error(err)
    console.log(res)
})


