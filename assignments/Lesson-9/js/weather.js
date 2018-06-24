

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
var requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

//Step 2
var request = new XMLHttpRequest();

//Step 3
request.open('GET', requestURL);

//Step 4
request.responseType = 'json';
request.send();

//Step 5
request.onload = function() {
  var superHeroes = request.response;
  //populateHeader(superHeroes);

  showHeroes(superHeroes);
}

function showHeroes(jsonObj) {

var heroes = jsonObj['towns'];


  for (var i = 0; i < heroes.length; i++) {

  if(heroes[i].name == "Franklin"){

	  var myArticlefrank = document.createElement('article');

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




      var myPara10 = document.createElement('p');
      var myPara1 = document.createElement('p');
      var myPara6 = document.createElement('p');
      var myPara7 = document.createElement('p');
      var myPara8 = document.createElement('p');
      var myPara9 = document.createElement('p');


  myPara10.textContent = 'Current temperature: ' + temp;
  myPara1.textContent = 'current weather description: ' + weather;
  myPara6.textContent = 'high temp: ' + temp_max;
  myPara7.textContent = 'low temp: ' + temp_min;
  myPara8.textContent = 'wind speed: ' + speed;
  myPara9.textContent = 'current weather icon: ' + icon;

  myArticlefrank.appendChild(myPara10);
  myArticlefrank.appendChild(myPara1);
  myArticlefrank.appendChild(myPara6);
  myArticlefrank.appendChild(myPara7);
  myArticlefrank.appendChild(myPara8);
  myArticlefrank.appendChild(myPara9);


}




    var myH2 = document.createElement('h2');
    var myPara11 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myPara5 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara11.textContent = 'Motto: ' + heroes[i].motto;
    myPara2.textContent = 'Year Founded: ' + heroes[i].yearFounded;
    myPara3.textContent = 'Current Population: ' + heroes[i].currentPopulation;
    myPara4.textContent = 'Average Rainfall: ' + heroes[i].averageRainfall;
    myPara5.textContent = 'Events:';

    var superPowers = heroes[i].events;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticlefrank.appendChild(myH2);
    myArticlefrank.appendChild(myPara11);
    myArticlefrank.appendChild(myPara2);
    myArticlefrank.appendChild(myPara3);
    myArticlefrank.appendChild(myPara4);
    myArticlefrank.appendChild(myPara5);
    myArticlefrank.appendChild(myList);

    section.appendChild(myArticlefrank);
    }
  }





  for (var i = 0; i < heroes.length; i++) {

  if(heroes[i].name != "Placerton" && heroes[i].name != "Franklin"){
    var myArticle = document.createElement('article');
    var myH2 = document.createElement('h2');
    var myPara1 = document.createElement('p');
    var myPara2 = document.createElement('p');
    var myPara3 = document.createElement('p');
    var myPara4 = document.createElement('p');
    var myPara5 = document.createElement('p');
    var myList = document.createElement('ul');

    myH2.textContent = heroes[i].name;
    myPara1.textContent = 'Motto: ' + heroes[i].motto;
    myPara2.textContent = 'Year Founded: ' + heroes[i].yearFounded;
    myPara3.textContent = 'Current Population: ' + heroes[i].currentPopulation;
    myPara4.textContent = 'Average Rainfall: ' + heroes[i].averageRainfall;
    myPara5.textContent = 'Events:';

    var superPowers = heroes[i].events;
    for (var j = 0; j < superPowers.length; j++) {
      var listItem = document.createElement('li');
      listItem.textContent = superPowers[j];
      myList.appendChild(listItem);
    }

    myArticle.appendChild(myH2);
    myArticle.appendChild(myPara1);
    myArticle.appendChild(myPara2);
    myArticle.appendChild(myPara3);
    myArticle.appendChild(myPara4);
    myArticle.appendChild(myPara5);
    myArticle.appendChild(myList);

    section.appendChild(myArticle);
    }
  }




}
