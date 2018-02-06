//size
var xx=512;
var yy=316;
var imgs;

//home
var xE = -32+xx;
var yE = -290+yy;

var gif;


function setup() {
  createCanvas(1030, 700);
     gif = loadGif("assets/monster.gif");
    
//imageMode(CENTER);
    
}


function draw() {

  background(0);
    
     image(gif, -490+xx, -270+yy, 1000, 688);
   
        //HOME
strokeWeight(0);
fill(255,0);
ellipse(xE, yE, 50, 35)
fill('#F8E4D0');    
textAlign(CENTER);
textFont('Amatic SC');
textSize(30);
strokeWeight(0);
text('HOME',-32+xx,-280+yy);
textSize(40);
text('OH! WHAT A SLEEP...TOO MUCH COFFEE!',-32+xx, -180+yy);
textSize(20);
text('WHAT EFFECTS DOES CAFFEINE HAVE ON YOU?',-32+xx, 363+yy);
textSize(16);
text('FEDERICA GUAZZONI, CHIARA SORRENTINO, YAQIAN WU',-32+xx, 383+yy);
    
    //SPIEGAZIONI
//textSize(20);
//text('INTAKE OF TOO MUCH CAFFEINE HAVE SOME EFFECTS ON VISION, SUCH AS HIGHER INTRA-OCULAR TENSION, VISION LOSS OR EVEN GLAUCOMA',-32+xx, 50+yy);
//textSize(20);
//text('TOO MUCH CAFFEINE CAN INCREASE HEART RATE, BLOOD PRESSURE AND CAUSE PALPITATION',-32+xx, 90+yy);
//textSize(20);
//text('CAFFEINE CAUSES ANXIETY THAT BRINGS TREMORS, INSOMNIA AND EXCITABILITY',-32+xx, 110+yy);
 
}

function mouseClicked() {
  dE = dist(mouseX, mouseY, xE, yE);
    if (dE < 40) {
  window.location.href = "../index.html";
    }
}
