export const geoApiOptions = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    params: {minPopulation: '1000000', namePrefix: ''},
    headers: {
        'X-RapidAPI-Key': 'bf04fa8bfemsh035ac2f61afb063p1bc61bjsn964cd8721435',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};



