
var width = window.innerWidth;
var height = window.innerHeight;

document.getElementById('width-in-pixels').innerHTML = width + '&nbsp';

document.getElementById('height-in-pixels').innerHTML = height + '&nbsp';

$(window).resize(function(){

var width = window.innerWidth;
var height = window.innerHeight;

document.getElementById('width-in-pixels').innerHTML = width + '&nbsp';
document.getElementById('height-in-pixels').innerHTML = height + '&nbsp';

})

