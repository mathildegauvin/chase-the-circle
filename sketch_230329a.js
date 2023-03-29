let fr = 60;  //frame rate is 60 frames per sec
let endGame = false;  
function setup() {
  if(endGame == true)  
  {
    frameRate(fr/160);  
    createCanvas(720,480);  
    background(r, g, b);  //background color
    
  }
  
  {
    createCanvas(500,500);
    background(0, 0, 0);  //Screen color when starting over
    r = random(255); // Pick circle color randomly
    g = random(255); // Pick circle color randomly
    b = random(255);  // Pick circle color randomly
     
  }
}
function draw() {
  if(endGame == true)  {
    endGame = false;
    setup();
    
  }
  frameRate(fr/60);
  background(236, 181, 255);  
  fill(r, g, b, 100);
  x = random(500);
  y = random(500);
  circle(x, y, 50)
}
function mousePressed() { // When the user clicks inside the circle, it changes place
  
  let distance = dist(mouseX, mouseY, x, y);  // Check if mouse is inside the circle
  if (distance < 100) {
  
  }
}
function keyPressed() { 
  setup();  // When the user press Spacebar on the keyboard, the game Reset
}
