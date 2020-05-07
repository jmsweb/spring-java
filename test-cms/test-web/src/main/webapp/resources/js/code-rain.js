var matrix = document.getElementById("matrix");
var ctx = matrix.getContext("2d");

matrix.height = window.innerHeight;
matrix.width = window.innerWidth;

//var america = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*(),./;'[]-=_+{}:<>?";
var america = "ROCHESTERNATIONALTECHNICALINSTITUTEOFTECHNOLOGY20092011";
america = america.split("");

var font_size = 21;
var columns = matrix.width/font_size;
var drops = [];

for(var x = 0; x < columns; x++) {
	drops[x] = 1; 
}

function draw() {
	ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
	ctx.fillRect(0, 0, matrix.width, matrix.height);
	ctx.fillStyle = "#0F0"; 
	ctx.font = "bold " + font_size + "px Courier";
	for(var i = 0; i < drops.length; i++) {
		var text = america[Math.floor(Math.random()*america.length)];
		ctx.fillText(text, i*font_size, drops[i]*font_size);
		if(drops[i]*font_size > matrix.height && Math.random() > 0.975)
			drops[i] = 0;
		drops[i]++; 
	}
}

setInterval(draw, 50);