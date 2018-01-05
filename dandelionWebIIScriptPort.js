rSlideIndex = 0; 


	carousel(); 



function changeSlidesButton(d) {
	console.log("change slide. SlideIndex = "+rSlideIndex);
	rSlideIndex += d; 
		if (rSlideIndex>realizeSlides.length) {
		rSlideIndex=1;
		console.log("Slide Index too big and now Slide Index ="+rSlideIndex)
		}

	if (rSlideIndex<1) {
		rSlideIndex=realizeSlides.length;
		console.log("Slide Index too small and now Slide Index ="+rSlideIndex);
	}
	i=0;
	realizeSlides = document.getElementsByClassName("realizeSlide");
	
	for (i=0; i<realizeSlides.length; i++) {
	realizeSlides[i].style.display="none"; 
	}	
	realizeSlides[rSlideIndex-1].style.display = ("block"); 

}	

function carousel() {
	i=0;
	realizeSlides = document.getElementsByClassName("realizeSlide");
	for (i=0; i<realizeSlides.length; i++) {
	realizeSlides[i].style.display="none"; 
	}	
	rSlideIndex++;
	if (rSlideIndex>realizeSlides.length) {
		rSlideIndex=1;
		console.log("Slide Index too big and now Slide Index ="+rSlideIndex)
		}
	if (rSlideIndex<1) {
		rSlideIndex=realizeSlides.length;
		console.log("Slide Index too small and now Slide Index ="+rSlideIndex);
	}
	realizeSlides[rSlideIndex-1].style.display = ("block"); 
	setTimeout(carousel, 4000);
		
}

function toggleV() {
	alert("alert"); 
	if (document.getElementsByClassname("rB").style.display == "none") {
		document.getElementsByClassName("rB").style.display = "block"
	} else if (document.getElementsByClassName("rB").style.display == "block") {
		document.getElementsByClassname("rB").style.display = "none"
	}
}