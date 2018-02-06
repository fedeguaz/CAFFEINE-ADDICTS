
//Home page!

//var mySong;
var monster;
var heart, muscle, eye;
var s=0;
var cuoreOn=false;
var xx=512;
var yy=316;

//var muscles
var x=124 + xx;
var y=55 + yy;

//var cuore
var xC = 15 + xx;
var yC = 120 + yy;

//var occhi
var xO = -10 + xx;
var yO = 13 + yy;


function preload(){
  //mySong = loadSound('/assets/bgm1.mp3');
  monster = loadImage("./assets/mostro.png");
  eye = loadImage("./assets/eye.png");
  heart = loadImage("./assets/heart.png");
  muscle = loadImage("./assets/muscle.png");
    
}

function setup() {
  createCanvas(1030, 700);
  imageMode(CENTER);
  angleMode(DEGREES);
  frameRate(12);
  }

function draw() {
  background('#642525');
    
    //RESIZE
//  translate(width/2,height/2);
//  scale(s/700);
//  if(width>height) {s=height;}
//  else {s=width;}


textSize(50);
textAlign(CENTER);
textFont('Amatic SC');
fill("#f8e4d0");
text('WHAT EFFECTS DOES CAFFEINE HAVE ON YOU?',0+xx,-200+yy);
 
    
//MONSTER
image(monster,20+xx,122+yy,320,340);
 
//HEART
push();
if(frameCount%20) {
  image(heart,15+xx,120+yy,30,38);
  cuoreOn=true;
} else {
  cuoreOn=false;
}
pop();

//EYE
push();
 translate(-10+xx,13+yy)
 rotate(1.2*mouseX/2)
image(eye,0,0,70,50);
pop();

//MUSCLES
push();
var posX= x + random(-0.9, 1.1);
var posY= y + random(-0.9, 1.1);
image(muscle,posX,posY,35,30);
pop();
    
    //ELLISSI CUORE
    noStroke();
    fill(255,0);
    ellipse(xC, yC, 30, 38);
    
    //ELLISSI OCCHI
    noStroke();
    fill(255,0);
    ellipse(xO, yO, 70, 50);
    
    //ELLISSI MUSCOLI
    noStroke();
    fill(255,0);
    ellipse(x, y, 32, 32);
    

////guide
//  stroke(255,0,0);
//  line(-width,0,width,0);
//  line(0,-height,0,height);
////guide cuore
//  stroke(255);
//  line(-width,100,width,100);
//  line(-width,140,width,140);
//  line(40,-height,40,height);
//  line(10,-height,10,height);
////guide muscle
//  line(-width,40,width,40);
//  line(-width,70,width,70);
//  line(112,-height,112,height);
//  line(142,-height,142,height);
////guide eye
//  line(-width,-30,width,-30);
//  line(-width,30,width,30);
//  line(30,-height,30,height);
//  line(-30,-height,-30,height);
 
}

function mouseClicked() {
    
    dC = dist(mouseX, mouseY, xC, yC);
    dO = dist(mouseX, mouseY, xO, yO);
    dM = dist(mouseX, mouseY, x, y);
    
      if(dC < 16) {
          window.location.href = "heart.html";}
    
      else if(dO < 30) {
          window.location.href = "eye.html";}
  
      else if(dM < 16) {
          window.location.href = "muscle.html";}

}
