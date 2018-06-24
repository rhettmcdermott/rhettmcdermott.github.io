

/*
http://api.openweathermap.org/data/2.5/forecast?id=4156210&APPID={7c4e64ab25a2756c9149f6ae1e8117bf}

current temperature
current weather description
high temp
low temp
wind speed
current weather icon - weather icon key



<current>
    <city id="2643741" name="City of London">
     <coord lon="-0.09" lat="51.51">
     <country>GB</country>
     <sun rise="2015-06-30T03:46:57" set="2015-06-30T20:21:12">
    </city>
    <temperature value="72.34" min="66.2" max="79.88" unit="fahrenheit"/>
    <humidity value="43" unit="%">
    <pressure value="1020" unit="hPa">
    <wind>
     <speed value="7.78" name="Moderate breeze">
     <direction value="140" code="SE" name="SouthEast">
    </wind>
    <clouds value="0" name="clear sky">
    <visibility value="10000">
    <precipitation mode="no">
    <weather number="800" value="Sky is Clear" icon="01d">
    <lastupdate value="2015-06-30T08:36:14">
</current>
*/

//api.openweathermap.org/data/2.5/weather?id=4156210
//api.openweathermap.org/data/2.5/weather?id=4156210&appid=7c4e64ab25a2756c9149f6ae1e8117bf



	//Step 1
var requestURL2 = 'http://api.openweathermap.org/data/2.5/weather?id=4156210&appid=7c4e64ab25a2756c9149f6ae1e8117bf';

//Step 2
var request2 = new XMLHttpRequest();

//Step 3
request2.open('GET', requestURL2);

//Step 4
request2.responseType = 'json';
request2.send();

//Step 5
request2.onload = function() {
  var weatherData = request2.response;

  showweatherData(weatherData);
}

function showweatherData(jsonObj) {
var temp = jsonObj['main']['temp'];
var weather = jsonObj['weather'][0]['description'];
var temp_max = jsonObj['main']['temp_max'];
var temp_min = jsonObj['main']['temp_min'];
var speed = jsonObj['wind']['speed'];
var icon = jsonObj['weather'][0]['icon'];


var speedupdate = 'wind speed: ' + speed +' mph';
var temp_maxupdate = 'High: ' + temp_max;
var temp_minupdate = 'Low: ' + temp_min;

      var myPara10 = document.createElement('p');
      var myPara1 = document.createElement('p');
      var myPara6 = document.createElement('p');
      var myPara7 = document.createElement('p');
      var myPara8 = document.createElement('p');
      var myPara9 = document.createElement('p');


document.getElementById("WindSpeed").innerText = speedupdate;
document.getElementById("temphigh").innerText = temp_maxupdate;
document.getElementById("templow").innerText = temp_minupdate;

  myPara10.textContent = 'Current temperature: ' + temp;
  myPara1.textContent = 'current weather description: ' + weather;
  myPara6.textContent = 'high temp: ' + temp_max;
  myPara7.textContent = 'low temp: ' + temp_min;
  myPara8.textContent = 'wind speed: ' + speed;
  myPara9.textContent = 'current weather icon: ' + icon;



}

