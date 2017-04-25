$(function() {
navigator.geolocation.getCurrentPosition(locationSuccess, locationError); 
});

function locationSuccess(position) {
var weatherAPI = 'https://api.openweathermap.org/data/2.5/forecast?lat='+position.coords.latitude+
'&lon='+position.coords.longitude+'&units=metric&APPID=7d50e3a92cc3853d1849b06543304cd1&callback=?';
$.getJSON(weatherAPI, function(response) {
console.log(response);
$('#loc').html(response.city.name);
$('#country').html(response.country)

$('#temp').html(Math.round(response.list[0].main.temp));
$('#humidity').html(response.list[0].main.humidity)
$('#pressure').html(Math.round(response.list[0].main.pressure))
$('#description').html(response.list[0].weather[0].description)

});
}



function locationError(error) {
console.warn('Error:' + error.message);
}
