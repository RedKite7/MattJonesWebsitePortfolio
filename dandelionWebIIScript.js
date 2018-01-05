
ima = document.getElementById("dandImage"); 
flexi = document.getElementById("hContainer"); 


var navHeight = document.getElementById('wholeNav').offsetHeight;
var navMargin = document.getElementById('hContainer');


function animateI() {
	document.getElementById("doti").style.display = "block";
}

function deanimateI() {
	document.getElementById("doti").style.display = "none";
}

function animateII() {
	document.getElementById("dotii").style.display = "block";
}

function deanimateII() {
	document.getElementById("dotii").style.display = "none";
}

function animateIII() {
	document.getElementById("dotiii").style.display= "block";
}

function deanimateIII() {
	document.getElementById("dotiii").style.display = "none";
}

function animateIV() {
	document.getElementById("dotiv").style.display= "block";
}

function deanimateIV() {
	document.getElementById("dotiv").style.display = "none";
}

function setMargin() {
	navMargin.style.marginTop = navHeight; 
	
}

setMargin();

function openMenu() {
	document.getElementById("hiddenMenuContainer").style.height = "20em";
	document.getElementById("menuOpenButton").style.display = "none";
	document.getElementById("menuCloseButton").style.display = "block";
}

function closeMenu() {
	document.getElementById("hiddenMenuContainer").style.height = "0";
	document.getElementById("menuOpenButton").style.display = "block";
	document.getElementById("menuCloseButton").style.display = "none";
}




