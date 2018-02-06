//bubbles
var bubbles = [];
var a;
var b;
var cvalue;
var bollaScelta = 16;
var distanzaBolle = 30;
var f=0;

//page

var xx=512
var yy=316;

//slider
var x1=-135+xx;
var y1=80+yy;
var x2=70+xx;
var y2=80+yy;
var a2=-135+xx;

//home
var xE = -32+xx;
var yE = -290+yy;

//timer-occhi
var timer=90;
var giu=-yy;

function preload() {
    
mostro = loadImage("./assets/mostro3.png");
tazzina = loadImage("./assets/tazzina.png");

}

function setup() {
    
//createCanvas(1440, 826);
createCanvas(1030, 700);
//createCanvas(1000, 750);
imageMode(CENTER);  
    
for (var i=0;i<10;i++) {
    for (var j=0;j<10;j++) {
        bubbles.push(new Bubble(distanzaBolle + i*distanzaBolle+206+xx,distanzaBolle + j*distanzaBolle-156+yy));
    }
}
    
}

function draw() {  
    
  background("#D87755");

//SLIDER   
stroke('#efe3d5');
strokeWeight(2);
line(x1,y1,x2,y2);
fill('#efe3d5');
rect(a2,75+yy,10,10,3);
textAlign(CENTER);
textFont('Amatic SC');
textSize(20);
strokeWeight(0);
text('press',-130+xx,110+yy);
text('press',66+xx,110+yy);
textSize(25);
stroke('#efe3d5');
strokeWeight(1);
text('-',-110+xx,110+yy);
text('+',87+xx,110+yy);
    
//HOME
strokeWeight(0);
fill(255,0);
ellipse(xE, yE, 50, 35)
fill('#efe3d5');    
textAlign(CENTER);
textFont('Amatic SC');
textSize(30);
strokeWeight(0);
text('HOME',-32+xx,-280+yy);
textSize(20);
text('WHAT EFFECTS DOES CAFFEINE HAVE ON YOU?',-32+xx, 383+yy);
    
//MOSTRO
  image(mostro,-380+xx,-10+yy,230,330);
    
//F BUBBLES
    for (i=0; i<100; i++) {
    bubbles[i].moved();
    bubbles[i].display();
    bubbles[bollaScelta].col = color("#642525");        
    } 
    
//TAZZINA BERSAGLIO
    noFill();
    stroke(3);
    image(tazzina, -27+xx, -30+yy, 35, 27);
   // ellipse(-35,-30,30,30);
    
    
//LINEE BERSAGLIO
//    stroke(0);
//    strokeWeight(1);
//    line(-31+xx, -height, -31+xx, height);
//    line(-width, -30+yy, width, -30+yy);  
//    
//    console.log(bollaScelta);
    
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
        a2 = a2 +50;
    } else if (keyCode === 189) {
        a2 = a2 -50;
    }
    
    if(a2===115+xx){
        a2 = a2 -50;
    } else if (a2=== -185+xx) {
        a2 = a2 +50;
    }
}

function mouseMoved() {  
    for (var i = 0; i <bubbles.length ; i++) {
        bubbles[i].moved();
    }
}


function Bubble(posX, posY) {

    //Assegna un ID ad ogni bolla
    this.id=bubbles.length;

    this.x = posX;
    this.y = posY;
    this.w = 12;
    this.h = 12;
    this.col = color("#F8E4D0"); // COLORE RETTANGOLINI NON SELEZIONATI
    
    this.display = function() {

        // ARRAY DI RETTANGOLINI
    noStroke();
    fill(this.col);
    rect(this.x, this.y, this.w, this.h, 2);
    }
    
    
    this.moved = function() {
        
        var cvalue = a2;
        var dBollaScelta = dist(-31+xx, -30+yy, bubbles[bollaScelta].x, bubbles[bollaScelta].y);
        var dBollaCaso = dist(-31+xx, -30+yy, this.x, this.y);
        var d = dist(mouseX, mouseY, this.x, this.y);
        var c=1;
        
        //VAL == 1 == -135
        
        if (mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY < this.y+this.h && cvalue == -135+xx && bubbles[bollaScelta].x < -31+xx && bubbles[bollaScelta].y < -30+yy) {
       this.x = this.x + c*random(-0.9, 1.1);
       this.y = this.y + c*random(-0.9, 1.1);
        } else if (mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY < this.y+this.h && cvalue == -135+xx && bubbles[bollaScelta].x < -31+xx && bubbles[bollaScelta].y > -30+yy) {
       this.x = this.x + c*random(-0.9, 1.1);
       this.y = this.y + c*random(-1.1, 0.9);
        } else if (mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY < this.y+this.h && cvalue == -135+xx && bubbles[bollaScelta].x > -31+xx && bubbles[bollaScelta].y < -30+yy) {
       this.x = this.x + c*random(-1.1, 0.9);
       this.y = this.y + c*random(-0.9, 1.1);    
        } else if (mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY < this.y+this.h && cvalue == -135+xx && bubbles[bollaScelta].x > -31+xx && bubbles[bollaScelta].y > -30+yy) {
       this.x = this.x + c*random(-1.1, 0.9);
       this.y = this.y + c*random(-1.1, 0.9); 
            
        } else if (mouseX > this.x && mouseX < this.x+this.w && mouseY > this.y && mouseY < this.y+this.h && cvalue == -135+xx) {
       this.x = this.x + c*random(-1, 1);
       this.y = this.y + c*random(-1, 1);  
            
        //VAL == 2 == -85
                               
        } else if (d < 14 && cvalue == -85+xx && bubbles[bollaScelta].x < -31+xx && bubbles[bollaScelta].y < -30+yy) {
       this.x = this.x + c*random(-2.3, 2.7);
       this.y = this.y + c*random(-2.3, 2.7);
        } else if (d < 14 && cvalue == -85+xx && bubbles[bollaScelta].x < -31+xx && bubbles[bollaScelta].y > -30+yy) {
       this.x = this.x + c*random(-2.3, 2.7);
       this.y = this.y + c*random(2.7, -2.3);
        } else if (d < 14 && cvalue == -85+xx && bubbles[bollaScelta].x > -31+xx && bubbles[bollaScelta].y < -30+yy) {
       this.x = this.x + c*random(-2.7, 2.3);
       this.y = this.y + c*random(2.7, -2.3);
        } else if (d < 14 && cvalue == -85+xx && bubbles[bollaScelta].x > -31+xx && bubbles[bollaScelta].y > -30+yy) {
       this.x = this.x + c*random(-2.7, 2.3);
       this.y = this.y + c*random(-2.7, 2.3);
            
        } else if (d < 14 && cvalue == -85+xx) {
       this.x = this.x + c*random(-2.5, 2.5);
       this.y = this.y + c*random(-2.5, 2.5);
        
            //VAL == 3 == -35 VEDI SE AUMENTARE UN POCO O NO
            
        } else if (d < 18 && cvalue == -35+xx && bubbles[bollaScelta].x < -31+xx && bubbles[bollaScelta].y < -30+yy) {
       this.x = this.x + c*random(-4.6, 5.4);
       this.y = this.y + c*random(-4.6, 5.4);
        } else if (d < 18 && cvalue == -35+xx && bubbles[bollaScelta].x < -31+xx && bubbles[bollaScelta].y > -30+yy) {
       this.x = this.x + c*random(-4.6, 5.4);
       this.y = this.y + c*random(5.4, -4.6);
        } else if (d < 18 && cvalue == -35+xx && bubbles[bollaScelta].x > -31+xx && bubbles[bollaScelta].y < -30+yy) {
       this.x = this.x + c*random(-5.4, 4.6);
       this.y = this.y + c*random(5.4, -4.6);
        } else if (d < 18 && cvalue == -35+xx && bubbles[bollaScelta].x > -31+xx && bubbles[bollaScelta].y > -30+yy) {
       this.x = this.x + c*random(-5.4, 4.6);
       this.y = this.y + c*random(-5.4, 4.6);    

        } else if (d < 18 && cvalue == -35+xx) {
            this.x-=1;
        this.x = this.x + c*random(-5, 5)+e;
        this.y = this.y + c*random(-5, 5);
            
            //VAL == 4 == 15
            
        } else if (d < 22 && cvalue == 15+xx && bubbles[bollaScelta].x < -31+xx && bubbles[bollaScelta].y < -30+yy) {
       this.x = this.x + c*random(-6.9, 7.6);
       this.y = this.y + c*random(-6.9, 7.6);
        } else if (d < 22 && cvalue == 15+xx && bubbles[bollaScelta].x < -31+xx && bubbles[bollaScelta].y > -30+yy) {
       this.x = this.x + c*random(-6.9, 7.6);
       this.y = this.y + c*random(7.6, -6.9);
        } else if (d < 22 && cvalue == 15+xx && bubbles[bollaScelta].x > -31+xx && bubbles[bollaScelta].y < -30+yy) {
       this.x = this.x + c*random(-7.6, 6.9);
       this.y = this.y + c*random(7.6, -6.9);
        } else if (d < 22 && cvalue == 15+xx && bubbles[bollaScelta].x > -31+xx && bubbles[bollaScelta].y > -30+yy) {
       this.x = this.x + c*random(-7.6, 6.9);
       this.y = this.y + c*random(-7.6, 6.9);    
            
        } else if (d < 22 && cvalue == 15+xx) {
       this.x = this.x + c*random(-7.5, 7.5);
       this.y = this.y + c*random(-7.5, 7.5);
            
            //VAL == 5 == 65
            
        } else if (d < 25 && cvalue == 65+xx && bubbles[bollaScelta].x < -31+xx && bubbles[bollaScelta].y < -30+yy) {
       this.x = this.x + c*random(-9.3, 10.7);
       this.y = this.y + c*random(-9.3, 10.7);
        } else if (d < 25 && cvalue == 65+xx && bubbles[bollaScelta].x < -31+xx && bubbles[bollaScelta].y > -30+yy) {
       this.x = this.x + c*random(-9.3, 10.7);
       this.y = this.y + c*random(10.7, -9.3);
        } else if (d < 25 && cvalue == 65+xx && bubbles[bollaScelta].x > -31+xx && bubbles[bollaScelta].y < -30+yy) {
       this.x = this.x + c*random(-10.7, 9.3);
       this.y = this.y + c*random(10.7, -9.3);
        } else if (d < 25 && cvalue == 65+xx && bubbles[bollaScelta].x > -31+xx && bubbles[bollaScelta].y > -30+yy) {
       this.x = this.x + c*random(-10.7, 9.3);
       this.y = this.y + c*random(-10.7, 9.3);
            
        } else if (d < 25 && cvalue == 65+xx) {
       this.x = this.x + c*random(-10, 10);
       this.y = this.y + c*random(-10, 10);
        }
        
        
        
        
        // PALLINA NEL BERSAGLIO
         if (dBollaScelta <=12) {
        nuovaPallina();}
        
      else if (dist(-31+xx,-30+yy,this.x,this.y) < 25) {
          
          //Stai fuori dal cerchio se non sei bollaScelta
          if(this.id!=bollaScelta)
          {
              if(this.x>-31+xx)
              this.x+=5;
              else
              this.x-=5;

              if(this.y>-30+yy)
              this.y+=5;
              else
              this.y-=5;
          }
        }   
            
    }  // chiusura function moved
} // chiusura oggetto

//NUOVA PALLINA FUNZIONE

function nuovaPallina() {  
    
    bubbles[bollaScelta].col = color(255,0,0,0);
    bollaScelta=round(random(0,100));
    
}

function mouseClicked() {
  dE = dist(mouseX, mouseY, xE, yE);
    if (dE < 40) {
  window.location.href = "../index.html";
    }
}

//function windowResized() {
//    resizeCanvas(windowWidth, windowHeight)}