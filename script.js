'use strict';
(function(){ 
var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
    if(!countryName.length) countryName = 'Poland';
    $.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}
function showCountriesList(resp) {
    countriesList.empty();
    resp.forEach(function(item){
   	$('<li>').text(item.name).appendTo(countriesList);
        $('<p>').text('Capital: '+item.capital).appendTo(countriesList);
        $('<p>').text('Population: '+item.population).appendTo(countriesList);
        $('<p>').text('Area: '+item.area).appendTo(countriesList);
        $('<p>').text('Language: '+item.languages[0].name).appendTo(countriesList);
        $('<p>').text('Currency: '+item.currencies[0].name).appendTo(countriesList);    
});
}
})();