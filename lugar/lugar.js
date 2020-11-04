const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodedUrl }.json?access_token=pk.eyJ1IjoiamVzaHVhZ2VyYWxkIiwiYSI6ImNraDJsaXdoYjBnaDUzMXF4Z3o2aDgzMDkifQ.enK6Zk8YpYNKm_ghUqXOmw`
    });

    const resp = await instance.get();

    if (resp.data.features.length === 0) {
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data.features[0];
    const direccion = data.place_name;
    const lon = data.center[0];
    const lat = data.center[1];

    // axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodedUrl }.json?access_token=pk.eyJ1IjoiamVzaHVhZ2VyYWxkIiwiYSI6ImNraDJsaXdoYjBnaDUzMXF4Z3o2aDgzMDkifQ.enK6Zk8YpYNKm_ghUqXOmw`)
    //     .then(resp => {
    //         console.log(resp.data.features[0]);
    //     })
    //     .catch(err => {
    //         console.log('ERROR!!!', err);
    //     });

    return {
        direccion,
        lat,
        lon
    }
}

module.exports = {
    getLugarLatLng
}