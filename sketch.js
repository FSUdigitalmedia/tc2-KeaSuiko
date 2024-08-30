function setup() {
  //creates a canvas 600 by 400 
  createCanvas(600, 400);
}

function draw() {
  //changing the numbers in the parathesis change the color of the background
  background(135, 206, 235);
  //circle sun 
  fill("yellow");
  stroke ("orange");
  strokeWeight(20); //outline
circle (550, 50, 100); 
stroke(0);
strokeWeight(1);
fill("green");
rect(0, 200, 600, 200);
textSize(75)
  text ("🌸", 100, 250)
  text("🐞", mouseX, mouseY)
}
