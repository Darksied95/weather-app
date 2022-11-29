const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log('Please provide an address');
} else {
    geocode(address, (err, { latitude, longitude, label }) => {
        if (err) return console.log(err)
        forecast(latitude, longitude, (err, res) => {
            if (err)
                return console.log(err);
            console.log(label);
            console.log(res);
        })
    })
}

