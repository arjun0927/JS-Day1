let elem = document.querySelector("body");
let elem1 = document.querySelector(".button");
let colors = ["red","blue","orange","pink"];


	elem1.addEventListener( "click" , (color)=> {
		if(colors.length == 0){
			alert("khatam tata bye bye gyaaa...");
		}
		for(let i=0 ; i<colors.length ; i++){
		elem.style.background = colors[i];
		colors.shift(colors[i])
		break;
		}
	})
	

