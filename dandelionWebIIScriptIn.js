var l = document.getElementById("l");
var m = document.getElementById("m");
var r = document.getElementById("r");
var hl = document.getElementById("hl");
var hm = document.getElementById("hm");
var hr = document.getElementById("hr");
var iI = document.getElementById("invisibleIndicatorOfHoverEnabled");

var mQHoverDisabled = window.matchMedia("(hover:none)"); 
var mQHoverEnabled = window.matchMedia("(hover:hover)");
// Create the query list.
function handleHoverChange(mql) { 
	console.log("function called to query the media. Does the query Match?"+mQHoverDisabled.matches); 
	if (mQHoverDisabled.matches) {
	console.log("While loop autocorrect"); 
	l.classList.add('correctionClassL');
	m.classList.add('correctionClassM');
	r.classList.add('correctionClassR');

	} else {
	l.classList.remove('correctionClassL');
	m.classList.remove('correctionClassM');
	r.classList.remove('correctionClassR');
	}
}

mQHoverDisabled.addListener(handleHoverChange); // Add the callback function as a listener to the query list.

handleHoverChange(mQHoverDisabled);

// Define a callback function for the event listener.
 // Run it once. (Or should it be more?) 

/* window.addEventListener("resize", resizeHandler, false);

 function resizeHandler() {
	setTimeout(function refresh() {
		handleHoverChange(mQHoverDisabled);
	}, 1000)
} */









function revealLeft() {
	if (mQHoverDisabled.matches) {
		console.log("hover disabled");
	} else {
	console.log("left")
	
	hl.classList.add('correctionClassL');
	l.classList.remove('defaultHidden');
	}
}

function hideLeft() {
	if (mQHoverDisabled.matches) {
		console.log("hover disabled");
	} else {
	console.log("hleft")
	
	hl.classList.remove('correctionClassL');
	l.classList.add('defaultHidden');
	}
}

function revealMiddle() {
	if (mQHoverDisabled.matches) {
		console.log("hover disabled");
	} else {
	console.log("middle")
	hm.classList.add('correctionClassM');
	m.classList.remove('defaultHidden');
	}
}

function hideMiddle() {
	if (mQHoverDisabled.matches) {
		console.log("hover disabled");
	} else {
	console.log("hmiddle")
	hm.classList.remove('correctionClassM');
	m.classList.add('defaultHidden');
	}
}

function revealRight() {
	if (mQHoverDisabled.matches) {
		console.log("hover disabled");
	} else {
	console.log("right")
	hr.classList.add('correctionClassR');
	r.classList.remove('defaultHidden');
	}
}

function hideRight() {
	if (mQHoverDisabled.matches) {
		console.log("hover disabled");
	} else {
	console.log("hright")
	hr.classList.remove('correctionClassR');
	r.classList.add('defaultHidden');
	}
}




