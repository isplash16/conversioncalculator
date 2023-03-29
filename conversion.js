// WEIGHT CONVERTER SCRIPT
function gramsCalculate() {
  var kilograms = document.getElementById("weightInput").value;
  var result;
  result = kilograms * 1000;
  document.getElementById("weightOutput").value = result + " g";
  document.getElementById("btnGrams").disabled = true;
  document.getElementById("btnPounds").disabled = false;
  document.getElementById("btnOunces").disabled = false;
}
function poundsCalculate() {
  var kilograms = document.getElementById("weightInput").value;
  var result;
  result = kilograms * 2.205;
  document.getElementById("weightOutput").value = result + " lbs";
  document.getElementById("btnGrams").disabled = false;
  document.getElementById("btnPounds").disabled = true;
  document.getElementById("btnOunces").disabled = false;
}
function ouncesCalculate() {
  var kilograms = document.getElementById("weightInput").value;
  var result;
  result = kilograms * 35.274;
  document.getElementById("weightOutput").value = result + " oz";
  document.getElementById("btnGrams").disabled = false;
  document.getElementById("btnPounds").disabled = false;
  document.getElementById("btnOunces").disabled = true;
}
function weightClear() {
  document.getElementById("weightInput").value = "";
  document.getElementById("weightOutput").value = "";
  document.getElementById("btnGrams").disabled = false;
  document.getElementById("btnPounds").disabled = false;
  document.getElementById("btnOunces").disabled = false;
}
// LENGTH CONVERTER SCRIPT
function inchesCalculate() {
  var kilometers = document.getElementById("lengthInput").value;
  var result;
  result = kilometers * 39370;
  document.getElementById("lengthOutput").value = result + " in";
  document.getElementById("btnInches").disabled = true;
  document.getElementById("btnFeet").disabled = false;
  document.getElementById("btnMiles").disabled = false;
}
function feetCalculate() {
  var kilometers = document.getElementById("lengthInput").value;
  var result;
  result = kilometers * 3281;
  document.getElementById("lengthOutput").value = result + " ft";
  document.getElementById("btnInches").disabled = false;
  document.getElementById("btnFeet").disabled = true;
  document.getElementById("btnMiles").disabled = false;
}
function milesCalculate() {
  var kilometers = document.getElementById("lengthInput").value;
  var result;
  result = kilometers / 1.609;
  document.getElementById("lengthOutput").value = result + " mi";
  document.getElementById("btnInches").disabled = false;
  document.getElementById("btnFeet").disabled = false;
  document.getElementById("btnMiles").disabled = true;
}
function lengthClear() {
  document.getElementById("lengthInput").value = "";
  document.getElementById("lengthOutput").value = "";
  document.getElementById("btnInches").disabled = false;
  document.getElementById("btnFeet").disabled = false;
  document.getElementById("btnMiles").disabled = false;
}
// TIME CONVERTER SCRIPT
function secondsCalculate() {
  var hours = document.getElementById("timeInput").value;
  var result;
  result = hours * 3600;
  document.getElementById("timeOutput").value = result + " secs";
  document.getElementById("btnSeconds").disabled = true;
  document.getElementById("btnMinutes").disabled = false;
  document.getElementById("btnDays").disabled = false;
}
function minutesCalculate() {
  var hours = document.getElementById("timeInput").value;
  var result;
  result = hours * 60;
  document.getElementById("timeOutput").value = result + " mins";
  document.getElementById("btnSeconds").disabled = false;
  document.getElementById("btnMinutes").disabled = true;
  document.getElementById("btnDays").disabled = false;
}
function daysCalculate() {
  var hours = document.getElementById("timeInput").value;
  var result;
  result = hours / 24;
  document.getElementById("timeOutput").value = result + " days";
  document.getElementById("btnSeconds").disabled = false;
  document.getElementById("btnMinutes").disabled = false;
  document.getElementById("btnDays").disabled = true;
}
function timeClear() {
  document.getElementById("timeInput").value = "";
  document.getElementById("timeOutput").value = "";
  document.getElementById("btnSeconds").disabled = false;
  document.getElementById("btnMinutes").disabled = false;
  document.getElementById("btnDays").disabled = false;
}
// TEMPERATURE CONVERTER SCRIPT
function fahrenheitCalculate() {
  var celcius = document.getElementById("temperatureInput").value;
  var result;
  result = (celcius * 9) / 5 + 32;
  document.getElementById("temperatureOutput").value = result + " °F";
  document.getElementById("btnF").disabled = true;
  document.getElementById("btnK").disabled = false;
}
function kelvinCalculate() {
  var celcius = parseInt(document.getElementById("temperatureInput").value);
  var result;
  result = celcius + 273.15;
  document.getElementById("temperatureOutput").value = result + " K";
  document.getElementById("btnF").disabled = false;
  document.getElementById("btnK").disabled = true;
}
function temperatureClear() {
  document.getElementById("temperatureInput").value = "";
  document.getElementById("temperatureOutput").value = "";
  document.getElementById("btnF").disabled = false;
  document.getElementById("btnK").disabled = false;
}
