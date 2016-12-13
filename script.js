var appId = '23da7269608ac9faff5de2751d75644e';
var url = 'http://api.openweathermap.org/data/2.5/forecast';
function prepareData(units){
var cityName = $('#location').val();
if(cityName != ''){
	cityName = cityName.trim();
	getData(url,cityName,appId);
	}
}

function getData(url,city,appId){
	var request = $.ajax({
		url: url,
		dataType: "jsonp",
		data: {q: city, appid: appId},
		jsonpCallback: "fetchData",
		type: "GET"
	}).fail(function(error){
				console.error(error)
				alert('Error sending request')
	})
}

function fetchData (forecast) {
	console.log(forecast)
	var html = '',
	 cityName = forecast.city.name,
	 country = forecast.city.country
	html += '<h3> Weather Forecast for ' + cityName + ', ' + country + '</h3>'
	forecast.list.forEach(function(forecastEntry, index, list){
	html += '<p>' + forecastEntry.dt_txt + ': ' + forecastEntry.main.temp + '</p>'
	})

	$('#log').html(html)
}