let body = document.body;
let linksTab = document.getElementById("links");
let darkBttn = document.getElementById("dark-button");
let lightBttn = document.getElementById("light-button");
let links = document.getElementsByClassName("linkElem");


function switchToDark(){
	body.style.background = "black";
	body.style.color = "white";
	
	for(i = 0; i < links.length; i++){
		links[i].style.setProperty("color", "white", "important");
	}
	
	console.log("dark button clicked!");
}

function switchToLight(){
	body.style.background = "white";
	body.style.color = "black";
	
	for(i = 0; i < links.length; i++){
		links[i].style.setProperty("color", "black", "important");
	}
	
	console.log("light button clicked!");
	
}

darkBttn.addEventListener("click", switchToDark);
lightBttn.addEventListener("click", switchToLight);

