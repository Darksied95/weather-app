const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=9408cd64ecc47f8960b0391b0e503d7d&query=6.5244,3.3792'
const latAndlong = 'http://api.positionstack.com/v1/forward?access_key=9c9e1ce1f4f968fa565f0b87e104f355&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC'



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


request({ url: latAndlong, json: true }, (err, res) => {
    if (err) {
        console.log('Unable to connect to location API');
    }
    const { latitude, longitude } = res.body.data[0]
    console.log(latitude, longitude);
})