const request = require('request')


function forecast(lat, long, callback) {
    const url = `http://api.weatherstack.com/current?access_key=9408cd64ecc47f8960b0391b0e503d7d&query=${lat},${long}`

    request({ url, json: true }, (err, res) => {
        if (err) {
            callback('Unable to connect to weather service', undefined)
        } else if (res.body.error) {
            callback('Unable to find location', undefined);
        }
        else {
            const { temperature, feelslike } = res.body.current
            callback(undefined, `It's currently ${temperature} degress outside but it feels like ${feelslike} degrees`);
        }
    })
}

module.exports = forecast