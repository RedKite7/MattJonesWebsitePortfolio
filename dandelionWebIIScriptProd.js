
/* Variables for canvas */
var iaCanvas = document.getElementById("iaCanvas");
var iactx = iaCanvas.getContext("2d"); 
var ibCanvas = document.getElementById("ibCanvas");
var ibctx = ibCanvas.getContext("2d"); 
var icCanvas = document.getElementById("icCanvas");
var icctx = icCanvas.getContext("2d"); 
	speed = 1.4;
	speedInverse = 1/speed; 
	originX = 0;
	originY = 0;
	frame = 0;
	oOX = 50;
	oOY = 90; 
	
/* variables for drawing phone */

r = 3; 
br = r*3;
bo = 6; 
w = 15;
l =2*w; 

tl = l*0.8; 
tw = 1.7*tl;

secondOrigin = 210;

/* Functions for canvas */

iactx.translate(-oOX, oOY); 
iactx.save();


window.setInterval(drawAllGraphic,speedInverse); 

function drawPhoneScreen() {
	
	iactx.beginPath();
	iactx.moveTo(0-w-r,0-l);
	iactx.lineTo(0-w-r,0+l+0);
	iactx.stroke();
	iactx.moveTo(0-w, 0+l+0);
	iactx.beginPath();
	iactx.arc(0-w, 0+l+0, r, 3.14/2, 3.14);
	iactx.stroke();
	iactx.beginPath();
	iactx.moveTo(0-w,0+l+r+0); 
	iactx.lineTo(0+w,0+l+r+0);
	iactx.stroke();
	iactx.moveTo(0+w, 0+l+0);
	iactx.beginPath();
	iactx.arc(0+w, 0+l+0, r, 0, 3.14/2);
	iactx.stroke();
	iactx.beginPath();
	iactx.moveTo(0+w+r, 0+l+0);
	iactx.lineTo(0+w+r,0-l);
	iactx.stroke();
	iactx.moveTo(0+w, 0-l);
	iactx.beginPath();
	iactx.arc(0+w, 0-l, r, 3.14*3/2, 0);
	iactx.stroke();
	iactx.beginPath();
	iactx.moveTo(0+w, 0-l-r);
	iactx.lineTo(0-w, 0-l-r);
	iactx.stroke();
	iactx.moveTo(0-w, 0-l);
	iactx.beginPath();
	iactx.arc(0-w, 0-l, r, 3.14, 3.14*3/2);
	iactx.stroke();
	iactx.fillRect(0-w-r,0-l-r,2*w+r+r,2*l+r+r);

	
}



function drawPhoneBrick() {
	
	iactx.beginPath();
	iactx.moveTo(0-w-br,0-l);
	iactx.lineTo(0-w-br,0+l+bo);
	iactx.stroke();
	iactx.moveTo(0-w, 0+l+bo);
	iactx.beginPath();
	iactx.arc(0-w, 0+l+bo, br, 3.14/2, 3.14);
	iactx.stroke();
	iactx.beginPath();
	iactx.moveTo(0-w,0+l+br+bo); 
	iactx.lineTo(0+w,0+l+br+bo);
	iactx.stroke();
	iactx.moveTo(0+w, 0+l+bo);
	iactx.beginPath();
	iactx.arc(0+w, 0+l+bo, br, 0, 3.14/2);
	iactx.stroke();
	iactx.beginPath();
	iactx.moveTo(0+w+br, 0+l+bo);
	iactx.lineTo(0+w+br,0-l);
	iactx.stroke();
	iactx.moveTo(0+w, 0-l);
	iactx.beginPath();
	iactx.arc(0+w, 0-l, br, 3.14*3/2, 0);
	iactx.stroke();
	iactx.beginPath();
	iactx.moveTo(0+w, 0-l-br);
	iactx.lineTo(0-w, 0-l-br);
	iactx.stroke();
	iactx.moveTo(0-w, 0-l);
	iactx.beginPath();
	iactx.arc(0-w, 0-l, br, 3.14, 3.14*3/2);
	iactx.stroke();
	iactx.lineWidth=1.4;
}

function drawPhoneButton() {
	iactx.beginPath();
	iactx.arc(0, 0+l+(bo*1.5), r, 0, 3.14*2);
	iactx.stroke();
}

function drawAllGraphic() {
	
	
	iactx.clearRect(-800,-800,1600,1600);
	frame++;
	if (frame>3340) {
		
		originX= 0;
		originY=0;
		dx=0;
		dy=0;
		frame = 0; 
		
		iactx.clearRect(-800,-800,1600,1600);
		iactx.restore();
		iactx.save();
	
		/* alert("final frame a"+originX+" "+originY+" "+frame+" "+dx+""+dy); */
	} else if (frame>2740) {
		dx=0.001;
		iactx.fillStyle = "rgb(246, 71, 71)";
	} else if (frame > 2290) {
		originX= 0;
		originY=0;
		dx=0;
		dy=0;
		 iactx.rotate(-0.2*Math.PI/180);
	} else if (frame > 1850) {
		
		dx = +0.00085;
		
	} else if (frame>1750) {
		dx = 0;
		originX = 0; 
		iactx.scale(1.0045,1.0045); 
		
	} else if (frame>1250) {
		dx = -0.001; 
		iactx.fillStyle = "rgb(89, 171, 227)";
	} else if (frame>800) {
		originX = 0;
		originY = 0;
		dx = 0;
		dy = 0;
		iactx.rotate(0.2*Math.PI/180); 
	} else if (frame<800&&frame>0) {
		dx = 0.00048;
		dy = 0;
		iactx.fillStyle = "rgb(246, 71, 71)";
		
	} else if (frame==0) {
		
	}
	
	
	iactx.translate(originX,originY);
	
	drawPhoneScreen();
	
	drawPhoneBrick();
	drawPhoneButton();
		
	/* drawTabletScreen();
	drawTabletBrick();
	drawTabletButton(); */
	originX += dx;
	originY += dy;

}
v =2.5 *l;
sliderR = 0.1*v;
sliderIOriginY = 0;
sliderIIOriginY = 0;
sliderIIIOriginY = 0;
sliderIOriginX = 0-(1.2*v)/2;
sliderIIOriginX = 0;
sliderIIIOriginX = (1.2*v)/2;
ibctx.translate(100, 100);
drawB();
window.setInterval(drawB,speedInverse);
 
function drawB() {
	

	
	ibctx.clearRect(-400, -400, 800, 800);
	
	
	ibctx.beginPath();
	ibctx.moveTo(-(0.6*v), -(0.6*v));
	ibctx.lineTo(-(0.6*v), (0.6*v));
	ibctx.stroke();
	
	ibctx.beginPath();
	ibctx.moveTo((0.6*v), -(0.6*v));
	ibctx.lineTo((0.6*v), (0.6*v));
	ibctx.stroke();
	
	ibctx.beginPath();
	ibctx.moveTo(0, -(0.6*v));
	ibctx.lineTo(0, (0.6*v));
	ibctx.stroke();
	
	ibctx.moveTo(0, -(0.6*v));
	ibctx.beginPath();
	ibctx.arc(sliderIOriginX, sliderIOriginY, sliderR, 0, 2*3.14);
	ibctx.fill();
	
	ibctx.moveTo(0, -(0.6*v));
	ibctx.beginPath();
	ibctx.arc(sliderIIOriginX, sliderIIOriginY, sliderR, 0, 2*3.14);
	ibctx.fill();
	
	ibctx.moveTo(0, -(0.6*v));
	ibctx.beginPath();
	ibctx.arc(sliderIIIOriginX, sliderIIIOriginY, sliderR, 0, 2*3.14);
	ibctx.fill();
	
	if (frame>1400) {
		
	} else if (frame > 800) {
		sliderIOriginY=0;
		sliderIIOriginY=0;
		sliderIIIOriginY=0;
	} else if (frame > 600) {
		sliderIOriginY-=0.08;
		sliderIIOriginY-=0.24;
		sliderIIIOriginY-=0.13;
	} else if (frame > 400) {
		sliderIOriginY+=0.08;
		sliderIIOriginY+=0.24;
		sliderIIIOriginY+=0.13; 	
	} else if (frame > 200) {
		sliderIOriginY+=0.08;
		sliderIIOriginY+=0.24;
		sliderIIIOriginY+=0.13;
	} else if (frame > 0) {
		sliderIOriginY-=0.08;
		sliderIIOriginY-=0.24;
		sliderIIIOriginY-=0.13; 
	} 
}


	
	icctx.rotate(-30*Math.PI/180);
	var o3=200;
	var oX3=50;
	drawClicker();
var rippleRadius=0;	
	
/* setTimeout(function activateClicker() { */

window.setInterval(drawClickerAnimation,speedInverse);
/* }, 3000); */

function drawClicker() {
	
	icctx.beginPath();
	icctx.moveTo(oX3, o3-30);
	icctx.lineTo(oX3+20,o3+20);
	icctx.lineTo(oX3+5, o3+10);
	icctx.lineTo(oX3+5, o3+30);
	icctx.lineTo(oX3-5,o3+30);
	icctx.lineTo(oX3-5,o3+10);
	icctx.lineTo(oX3-20,o3+20);
	icctx.lineTo(oX3, o3-30);
	
	icctx.shadowColor="black"; 
	icctx.strokeStyle="#000000"; 
	icctx.stroke();
	icctx.fillStyle = "white";
	icctx.fill(); 
	
	icctx.beginPath();
		icctx.arc(oX3, o3-30, rippleRadius, 0, 3.14*2);
		icctx.strokeStyle="#000000"; 
		icctx.fillStyle = "black";
		icctx.stroke();
	

}


function drawClickerAnimation() {
	if (frame > 1200) {
		rippleRadius = 0;
	
		o3=200;
		oX3=50;
		
	} else if (frame > 650) {
		
		rippleRadius+= 0.5;
		
	} else if (frame > 625) {
		icctx.shadowBlur=8;
	
	} else if (frame>600) {
		icctx.shadowBlur=0;
	} else if (frame<=600) {
		o3-=0.1; 
		oX3-=0.01; 
		icctx.shadowBlur=8;
	}
	icctx.clearRect(-400,-400,800,800);
	drawClicker();


}

function drawRipple() {
	
	icctx.beginPath();
	icctx.arc(oX3, o3-30, 15, 0, 3.14*2);
	icctx.strokeStyle="#000000"; 
	icctx.stroke();
	
}
