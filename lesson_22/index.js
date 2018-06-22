import LocationApi from './location_api';
import Dom from './dom';
import Weather from './weather';

const locationApi = new LocationApi();
const dom = new Dom();
const btn = document.getElementById('btn');
const btn2 = document.getElementById('btn2');
const weather = new Weather();

btn.addEventListener('click', () => {
    dom.showPreloader();
        locationApi.getMyIp()
                .then(res => locationApi.getMyLocation(res.ip))
                .then(res => {
                    dom.setCoordinates(res);
                    return weather.getOpenWeather(res.city);
                })
                .then(res => {
                    weather.setOpenWeather(res);
                    dom.hidePreloader();
                })
                .catch(rej => {
                    dom.hidePreloader();
                    console.log('Error:', rej);
                });
})
btn2.addEventListener('click', () => {
    const city = document.getElementById('city');
    if(city.value) {
        dom.showPreloader();
        weather.getOpenWeather(city.value)
                .then(res => {
                    weather.setOpenWeather(res);
                    dom.hidePreloader();
                })
                .catch(rej => {
                    dom.hidePreloader();
                    console.log('Error:', rej);
                });
    }
}) 