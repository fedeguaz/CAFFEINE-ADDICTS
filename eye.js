
//Eyes'part!

//var soundClick;
var rot=[];
var r=40;
var c;
var d=11;
var eSize;
var s=0;

//size
var xx=512
var yy=316;

//slider
var x1=-135+xx;
var y1=80+yy;
var x2=70+xx;
var y2=80+yy;
var a=-135+xx;

//home
var xE = -32+xx;
var yE = -290+yy;

//timer-occhi
var timer=45;
var giu=-yy;


function preload(){
mostro = loadImage("./assets/mostro2.png");
//soundClick = loadSound('/assets/mouse.mp3');
}

function setup() {
  createCanvas(1030, 700);
  imageMode(CENTER);
  //frameRate(2);
  angleMode(DEGREES);
  textAlign(CENTER);
  for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
      rot.push(floor(random(4))*90);
    }
  }
}

function draw() {
  background('#fae6d1');
//  translate(width/2,height/2);
//scale(s/700);
//if(width>height) {s=height;}
//else {s=width;}
 
//monster
image(mostro,-380+xx,-10+yy,230,330);

//slider
stroke("#c0ac4c");
strokeWeight(2);
line(x1,y1,x2,y2);
fill("#c0ac4c");
rect(a,75+yy,10,10,3);
textAlign(CENTER);
textFont('Amatic SC');
textSize(20);
strokeWeight(0);
text('press',-130+xx,110+yy);
text('press',66+xx,110+yy);
textSize(25);
 stroke("#c0ac4c");
 strokeWeight(1);
text('-',-110+xx,110+yy);
text('+',87+xx,110+yy);
      
//HOME
strokeWeight(0);
fill(255,0);
ellipse(xE, yE, 50, 35)
fill('#c0ac4c');    
textAlign(CENTER);
textFont('Amatic SC');
textSize(30);
strokeWeight(0);
text('HOME',-32+xx,-280+yy);
textSize(20);
text('WHAT EFFECTS DOES CAFFEINE HAVE ON YOU?',-32+xx, 383+yy);
    
//IF SLIDER
      if(a===-135+xx) {
eSize=d+8;
} else if(a===-85+xx){
eSize=d+6;
} else if(a===-35+xx){
eSize=d+4;
} else if(a===15+xx){
eSize=d+2;
} else {
eSize=d;}

//E
if(frameCount%60===0){
    c=round(random(100));
  }
  var count=0;
  for(var i=0;i<10;i++){
    for(var j=0;j<10;j++){
      push();
      translate(j*30+220+xx,i*30-140+yy);
      rotate(rot[j+i*j]);
      fill("#c0ac4c");
      textSize(eSize);
      if((j+i*j)===c&&count===0){
        fill(255);
        count++;
        textStyle(BOLD);
      }
      textStyle(NORMAL);
      strokeWeight(2);
      text('E',0,6);
      pop();
      if (keyIsPressed) {
        if (keyCode === 38 && rot[c]===270) {
          //soundClick.isPlaying();
          r = 120;
        } else if (keyCode === 37 && rot[c]===180) {
          //soundClick.isPlaying();
          r=120;
        }else if (keyCode === 40 && rot[c]===90) {
          //soundClick.isPlaying();
          r=120;
        }else if (keyCode === 39 && rot[c]===0) {
          //soundClick.isPlaying();
          r=120;
        }
        else{
          r=40;
        }
      }
    }
  }
  strokeWeight(2);
  textFont('Amatic SC');
  textSize(r);
  fill('#c0ac4c');
  text("E",-32+xx,-18+yy);
  r=40;
    
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
  window.location.href = "../index.html";
    }
}

//function windowResized() {resizeCanvas(windowWidth, windowHeight);}