export default class Dom {
    constructor() {
        this.lat = document.getElementById('lat');
        this.long = document.getElementById('long');
        this.city = document.getElementById('city');
        this.country = document.getElementById('country');
        this.ip = document.getElementById('ip');
        this.id = document.getElementById('gif');
    }

    showPreloader() {
        this.id.style.opacity = 0;
    };

    hidePreloader() {
        this.id.style.opacity = 1;
    };

    setCoordinates(crd) {
        this.lat.value = crd.latitude;
        this.long.value = crd.longitude;
        this.city.value = crd.city;
        this.country.value = crd.country_name;
    };
}