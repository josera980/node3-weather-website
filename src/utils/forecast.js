const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b64ea519f54dd6991e07e351fde3d380&query=' + lat + ',' + long + '&units=f'
    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service.', undefined)
        } else if (body.error) {
            callback('Unable to find location. Try another search.')
        } else {
            const temp = body.current.temperature
            const feelslike = body.current.feelslike
            const weather_description = body.current.weather_descriptions
            callback(undefined, `${weather_description}. It is currently ${temp} degrees out. It feels like ${feelslike} degrees out.`)
        }
    })
}

module.exports = forecast