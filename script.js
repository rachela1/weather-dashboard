var apiKey = "6742848ffbdd73f2b4abfa38fd707bd8";
var queryUrl = 'https://api.openweathermap.org/data/2.5/weather?';
var city;
var searchCity = document.querySelector('#searchButton');

var getWeatherByCityName = async (city) => {
    city = document.getElementById('cityName').value;
    var endpoint = queryUrl + 'q=' + city + '&appid=' + apiKey;
    var response = await fetch(endpoint);
    var weather = await response.json();
    return weather;
}


searchCity.addEventListener('click', async (e) => {
    e.preventDefault();
    console.log(e);
    if(e.pointerId === 1) {
        var weather = await getWeatherByCityName(searchCity.value);
         console.log(weather);
    }
});
