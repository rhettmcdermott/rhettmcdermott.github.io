//Step 1
var requestURL = 'https://rhettmcdermott.github.io/serviceprice.json';

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

  showHeroes(superHeroes);
}




function showHeroes(jsonObj) {
  var heroes = jsonObj['services'];

  var mytable = document.createElement('table');
  var myth = document.createElement('th');
  var myth2 = document.createElement('th');

  myth.textContent = 'Type of Service';
  myth2.textContent = 'Cost';

      mytable.appendChild(myth);
      mytable.appendChild(myth2);

  for (var i = 0; i < heroes.length; i++) {

    var mytr = document.createElement('tr');

    var mytd1 = document.createElement('td');
    var mytd2 = document.createElement('td');

 //mytd1.textContent = heroes[i].service;
// mytd2.textContent = heroes[i].cost;

    var text1 = document.createTextNode(heroes[i].service);
    var text2 = document.createTextNode(heroes[i].cost);

  //alert("i "+i+" mytr "+mytr+" mytd1 "+mytd1+" mytd2 "+mytd2);
    //mytable.appendChild(mytr);
    //mytable.appendChild(mytd1);
    //mytable.appendChild(mytd2);

    mytd1.appendChild(text1);
    mytd2.appendChild(text2);
    mytr.appendChild(mytd1);
    mytr.appendChild(mytd2);

    mytable.appendChild(mytr);


    }

    section2.appendChild(mytable);
  }