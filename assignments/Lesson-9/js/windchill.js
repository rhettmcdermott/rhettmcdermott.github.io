
var high = 90;
var low = 60;
var windspeed = 5;
var tempf =((high-low)/2)+low;
var WCcomput = 35.74+0.6215 * tempf-35.75 * Math.pow(windspeed,0.16)+0.4275 * tempf * Math.pow(windspeed, 0.16);
var windchill = Math.round(WCcomput);
document.getElementById("windchill").innerHTML = windchill + "&#8457";