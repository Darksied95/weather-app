const request = require('request')
function geocode(address, callback) {

    const url = `http://api.positionstack.com/v1/forward?access_key=9c9e1ce1f4f968fa565f0b87e104f355&query=${address}`

    request({ url, json: true }, (err, res) => {
        if (err) {
            callback('Unable to connect to location API', undefined);
        } else if (res.body.error) {
            callback('Unable to find location, please try again', undefined);
        } else {
            const { latitude, longitude, name } = res.body.data[0]
            callback(undefined, { latitude, longitude, name });
        }
    })
}


module.exports = geocode