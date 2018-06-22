// this.temp = document.getElementById("temp");
// this.cache = {};

// getOpenWeather(city) {
// 	if (this.cache[city] && Date.now() -this.cache[city].timestamp < 1000 * 60 * 10) {
// 		return this.cache[city].data;
// 	}
// 	return fetch("http...");
// 	.then(resolve => {
// 		if(resolve.status === 200) {
// 			return resolve.json();
// 		} else {
// 			throw new Error("error");
// 		}
// 	})
// 	.then((data) =>)
// }


export default class WeatherApi {
	constructor () {
		this.my_api_key = '53232a7bbc8a0e876ac4ef3c76905926';
		this.weather = document.getElementById("weather");
	}
	
	getOpenWeather(city) {
	   // console.log(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.my_api_key}`);
		return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.my_api_key}`)
			.then(resolve => {
				if(resolve.status === 200) {
					return resolve.json();
				} else {
					throw new Error('error');
				}
			})
	}

	setOpenWeather(data) {
		this.weather.innerHTML = (data.main.temp-273.15).toFixed(0) + '&#8451;';
	
			//console.log(this.tempC);
		
	}
}
