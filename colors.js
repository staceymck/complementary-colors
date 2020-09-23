const colorBlocks = document.querySelectorAll('.color-item-wrapper');

colorBlocks.forEach(colorBlocks => {
	colorBlocks.addEventListener('click', () => {
			let compColor = changeToComp(colorBlocks.childNodes[1].id);
			colorBlocks.childNodes[1].id = compColor;
			});
});


function changeToComp(currentColor) {
	let newColor = "";
		switch(currentColor) {
			case "red":
			newColor = "green";
			break;
			case "orange":
			newColor = "teal";
			break;
			case "yellow":
			newColor = "violet";
			break;
			case "green":
			newColor = "red";
			break;
			case "teal":
			newColor = "orange";
			break;
			case "blue":
			newColor = "bright_orange";
			break;
			case "indigo":
			newColor = "gold";
			break;
			case "gold":
			newColor = "indigo";
			break;
			case "violet":
			newColor = "yellow";
			break;
			case "pink":
			newColor = "yellow_green";
			break;
			case "bright_orange":
			newColor = "blue";
			break;
			case "yellow_green":
			newColor = "pink";
		}
	return newColor;	
};

document.getElementById("swapAll").onclick = function () {
	colorBlocks.forEach(colorBlocks => {
	let compColor = changeToComp(colorBlocks.childNodes[1].id);
			colorBlocks.childNodes[1].id = compColor;
		});
};





