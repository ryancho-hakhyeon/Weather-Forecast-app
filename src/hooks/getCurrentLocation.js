import axios from "axios";

const geoApiOptions = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    params: {minPopulation: '100000'},
    headers: {
        'X-RapidAPI-Key': 'bf04fa8bfemsh035ac2f61afb063p1bc61bjsn964cd8721435',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const fetchGeoData = async (URL, callback) => {
    await axios.request(URL)
        .then(response => response.data)
        .then(data => callback(data))
        .catch(err => {
            console.log('Error message: ' + err) 
            return
        })
}

export const geoUrl = {
    getGeoByLocation(lat, lon) {
        var options = JSON.parse(JSON.stringify(geoApiOptions))
        var parameter = `${Math.round(lat * 100) / 100}${lon}`
        options.params.location = parameter
        return options
    },
    getGeoByName(name) {
        var options = JSON.parse(JSON.stringify(geoApiOptions))

        options.params.namePrefix = name
        options.params.limit = 10
        return options
    }
}