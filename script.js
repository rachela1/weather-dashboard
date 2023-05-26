var APIKey = "6742848ffbdd73f2b4abfa38fd707bd8"
var city;
// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + "APIke";
// fetch(var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + input + "&appid=" + "742848ffbdd73f2b4abfa38fd707bd8";)

var searchSubmitHandler = function(event) {
    event.preventDefault();
    var cityName = $("#cityName").val().trim();
    if(cityName) {
        getCurrentWeather(cityName);
        $("#cityName").val("");
    } else {
        alert("please eantera cityanme");
    }
};


var getCurrentWeather = function(city) {
    var APIUrl=  "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + "742848ffbdd73f2b4abfa38fd707bd8";
    fetch(APIUrl)
        .then(function(response){
            if (response.ok){
             response.json().then(function(data){
                displayWeather(data);
             });
        }else {
            alert("error:" + response.statusText);
      }   
    }) 
};