var timer_dom = document.createElement('div');
var suggestion_dom = document.createElement('div');
timer_dom.id = "timerDom";
suggestion_dom.id = "suggestionDom";
var timer = localStorage.getItem("timer");
var suggestions = [
  "..you could have cleaned the house",
  "..you could have read a book",
  "..you could have watched a movie",
  "..you could have drunk a coffee with friends"
];

function displayText(string) {
  $("#timerDom").html(string);
  //timer_dom.innertHTML = string;
}

function updateTimer() {
  var storedTimer = localStorage.getItem("timer");
  if (storedTimer == timer || storedTimer == null) {
    timer++;
    localStorage.setItem("timer", timer);
  }
  displayText(stringTime(storedTimer));
}

function updateSuggestion() {
  $("#suggestionDom").fadeTo("slow", 0, function() {
    $("#suggestionDom").html(suggestions[Math.floor(Math.random()*suggestions.length)]);
    $("#suggestionDom").fadeTo("slow", 1);
  });
}

function stringTime(seconds) {
  var hours = 0, minutes = 0;
  if (seconds > 3600) {
    hours = Math.floor(seconds / 3600.0);
    seconds = seconds - hours*3600;
  }
  if (seconds > 60) {
    minutes = Math.floor(seconds / 60.0);
    seconds = seconds - minutes*60;
  }
  var toReturn = "";
  if (hours > 1)
    toReturn = hours + " hours";
  else if (hours == 1)
    toReturn = "1 hour";
  if (toReturn != "")
    toReturn += " ";
  if (minutes > 0)  
    toReturn = toReturn + " " + minutes + " min";
  if (toReturn != "")
    toReturn += " ";
  if (seconds > 0)
    toReturn = toReturn + seconds + " sec";  
  return toReturn;
}

$(document).ready(function() {
//window.onload = function() {
  // Create the overlay at the top of the page and fill it with data.
  var container_dom = document.createElement('div');
  timer_dom.innerText = "Ciao";
  suggestion_dom.innerText =""; "Suggestion";
  container_dom.appendChild(timer_dom);
  container_dom.appendChild(suggestion_dom);
  container_dom.style.cssText = [
    'position: absolute;',
    'width: 200px;',
    'height: 40px;',
    'background-color: #000;',
    'opacity:0.8;',
//    'padding: 0px;',
 //   'margin-bottom: 20px;',
    'top: 44px;',
    '-webkit-box-shadow: #666 3px 3px 5px 1px;',
    'box-shadow: #666 3px 3px 5px 1px;',
    'border-radius: 8px;',
    'left: 10px;',
    'font: 18px Myriad Pro;',
    'z-index: 100;'
  ].join(' ');
  timer_dom.style.cssText = [
    'position: relative;',
    'padding: 10px 10px; 10px; 10px;',
    'color: #FFF;',
    'text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);',
    'float: left;'
  ].join(' ');
  suggestion_dom.style.cssText = [
    'position: relative;',
    'text-alignment: right;',
    'padding: 10px 10px; 10px; 10px;',
    'color: #FFF;',
    'text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);',
    'float: right;'
  ].join(' ');
  document.body.style.cssText = 'position: relative';
  $('#blueBarHolder').append(container_dom);
  //document.body.parentElement.insertBefore(container_dom, $("#pagelet_dock"));
  setInterval(updateTimer,1000);
  //$("#suggestionDom").html(suggestions[Math.floor(Math.random()*suggestions.length)]);
  //setInterval(updateSuggestion,10000);
  $("#blueBarHolder.slim").css("height",'0px');
  $("#globalContainer").css("top",'29px');
  displayText("Waste My Timer");
});



