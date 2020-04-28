


function moveRight(){  
	setClassRight()
	prependList()	
}

function setClassRight(){
	$("li:eq(0)").addClass("right")
	$("li:eq(0)").removeClass("center")
	$("li:eq(1)").addClass("back")
	$("li:eq(1)").removeClass("right")
	$("li:eq(2)").addClass("left")
	$("li:eq(2)").removeClass("back")
	$("li:eq(3)").addClass("center")
	$("li:eq(3)").removeClass("left")
}

function prependList(){
	let target = document.getElementsByClassName("center") 
	$("li:last").remove();
	$("ul").prepend(target);
}

function moveLeft(){
	setClassLeft();
	appendList();
}

function setClassLeft(){
	$("li:eq(0)").addClass("left")
	$("li:eq(0)").removeClass("center")
	$("li:eq(1)").addClass("center")
	$("li:eq(1)").removeClass("right")
	$("li:eq(2)").addClass("right")
	$("li:eq(2)").removeClass("back")
	$("li:eq(3)").addClass("back")
	$("li:eq(3)").removeClass("left")
}

function appendList(){
	let target = document.getElementsByClassName("left") 
	console.log(target)
	$("li:first").remove();
	$("ul").append(target);
}


console.log("")


