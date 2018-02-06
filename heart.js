var mic;
var s=10;

var mostro,cuorebck,cuorefrt;
var animationCuore,radius,maxRadius;
var battito;
var cuoreOn=false;

//size
var xx=512;
var yy=316;

//slider
var x1=-135+xx;
var y1=80+yy;
var x2=70+xx;
var y2=80+yy;
var a=-135+xx;

//timer-occhi
var timer=5;
var giu=-yy;

//home
var xE = -32+xx;
var yE = -290+yy;

function preload(){
    
mostro = loadImage("./assets/mostro1.png");

cuorefrt = loadImage("./assets/cuorefrt.png");
 
battito=loadSound("./assets/Cuore.mp3");

}

function setup() {
  createCanvas(1030,700);
  imageMode(CENTER);
  frameRate(10);
  
  //mic
mic=new p5.AudioIn();
mic.start();

//variabile cuore
animationCuore = false;
radius = height/10;
maxRadius = height*0.7;

}

function draw() {
background("#FAD49C");
//translate(width/2,height/2);
//scale(s/700);
//if(width>height) {s=height;}
//else {s=width;}
 
//mostro
image(mostro,-380+xx,-10+yy,230,330);
  
//griglia bck
for(var x=220+xx; x<520+xx; x+=30) {
 for(var y=-140+yy; y<160+yy; y+=30) {
  image(cuorefrt,x,y,14,16);
  }
}

//slider
stroke('#D87755');
strokeWeight(2);
line(x1,y1,x2,y2);
fill('#D87755');
rect(a,75+yy,10,10,3);
textAlign(CENTER);
textFont('Amatic SC');
textSize(20);
strokeWeight(0);
text('press',-130+xx,110+yy);
text('press',66+xx,110+yy);
textSize(25);
stroke('#D87755');
strokeWeight(1);
text('-',-110+xx,110+yy);
text('+',87+xx,110+yy);
    
    //HOME
strokeWeight(0);
fill(255,0);
ellipse(xE, yE, 50, 35)
fill('#D87755');    
textAlign(CENTER);
textFont('Amatic SC');
textSize(30);
strokeWeight(0);
text('HOME',-32+xx,-280+yy);
textSize(20);
text('WHAT EFFECTS DOES CAFFEINE HAVE ON YOU?',-32+xx, 383+yy);

if(a===-135+xx) {
var div=frameCount%10;
} else if(a===-85+xx){
var div=frameCount%8;
} else if(a===-35+xx){
var div=frameCount%6;
} else if(a===15+xx){
var div=frameCount%4;
} else {
var div=frameCount%2;}

//animazione cuore
if(div) {
  image(cuorefrt,-35+xx,-30+yy,30,34);
  cuoreOn=true;
} else {
  cuoreOn=false;
}

if(animationCuore===true) {
  radius+=100;
  battito.isPlaying();
  
//grigliafrt
for(var x=220+xx; x<520+xx; x+=30) 
{for(var y=-140+yy; y<160+yy; y+=30) 
{
  if(random()<0.5) 
  {
    var w=radius/45;
    var h=radius/47;
    image(cuorefrt,x,y,w,h);
} else {
    var w=14;
    var h=16;
    image(cuorefrt,x,y,w,h);
  }
 }
}

//reset
if(radius>maxRadius) {
radius=height/10;
animationCuore=false;}}
  
//mic
var vol=mic.getLevel();
var vol=map(vol,0,0.3,10,80);

if(vol>60 && cuoreOn===true) {
animationCuore=true;
radius=height*1.2;
battito.play();
}

//timer
if(frameCount%60==0&&timer>0) {timer--;}

if(timer==0) {
conseguenza();
}
}

function conseguenza() {   
window.location.href="black.html";   
}

function keyPressed() {
    if(keyCode===187) {
        a=a+50;
    } else if (keyCode === 189){
        a=a-50;
    }
    
    if(a===115+xx){
        a=a-50;
    } else if (a===-185+xx) {
        a=a+50;
    }
}

function mouseClicked() {
  dE = dist(mouseX, mouseY, xE, yE);
    if (dE < 40) {
  window.location.href = "index.html";
    }
}
