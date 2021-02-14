var scrollY = 0;
var distance = 40;
var speed = 24;
function autoScrollTo(el) {
	var currentY = window.pageYOffset;
	var targetY = document.getElementById(el).offsetTop;
	var bodyHeight = document.body.offsetHeight;
	var yPos = currentY + window.innerHeight;
	var animator = setTimeout('autoScrollTo(\''+el+'\')',24);
	if(yPos > bodyHeight){
		clearTimeout(animator);
	} else {
		if(currentY < targetY-distance){
		    scrollY = currentY+distance;
		    window.scroll(0, scrollY);
	    } else {
		    clearTimeout(animator);
	    }
	}
}
function resetScroller(el){
	var currentY = window.pageYOffset;
    var targetY = document.getElementById(el).offsetTop;
	var animator = setTimeout('resetScroller(\''+el+'\')',speed);
	if(currentY > targetY){
		scrollY = currentY-distance;
		window.scroll(0, scrollY);
	} else {
		clearTimeout(animator);
	}
}
function yScrollHandler(){
    var win = document.getElementById("peekaboo");
    if((window.pageYOffset + window.innerHeight) >= document.body.offsetHeight){
	//win.style.webkitTransition = "right 0.7s ease-in-out 0s";
	win.style.transition = "right 0.7s ease-in-out 0s";
	win.style.right = "0px";
    } else {
	win.style.transition = "right 0.7s ease-in-out 0s";
	win.style.right = "-452px";
    }
}
window.onscroll = yScrollHandler;

function renderTime() {
	var currentTime = new Date();
	var diem = "AM";
	var h = currentTime.getHours();
	var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
	setTimeout('renderTime()',1000);
    if (h == 0) {
		h = 12;
	} else if (h > 12) {
		h = h - 12;
		diem="PM";
	}
	if (h < 10) {
		h = "0" + h;
	}
	if (m < 10) {
		m = "0" + m;
	}
	if (s < 10) {
		s = "0" + s;
	}
    var myClock = document.getElementById('clockDisplay');
	myClock.textContent = h + ":" + m + ":" + s + " " + diem;
	myClock.innerText = h + ":" + m + ":" + s + " " + diem;
}
renderTime();
function countDown(secs,elem) {
	var element = document.getElementById(elem);
	element.innerHTML = "Please wait for "+secs+" seconds";
	if(secs < 1) {
		clearTimeout(timer);
		element.innerHTML = '<h2>Countdown Complete!</h2>';
		element.innerHTML += '<a href="#">Click here now</a>';
	}
	secs--;
	var timer = setTimeout('countDown('+secs+',"'+elem+'")',1000);
}
