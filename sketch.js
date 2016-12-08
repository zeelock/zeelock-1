var o=0;
function setup() {

createCanvas (windowWidth,windowHeight,WEBGL);

}
function draw() {
 
 background(0);
 
 
 
 push();
 //ambientLight(0);
 rotateX(frameCount*0.1);
 pointLight(0, 100, 250, 0, 1, -10);
 ambientMaterial(200);
 pop();
//translate( 0 , 0 , (mouseX-0.5*windowWidth)*1);
//rotateX((mouseY-0.5*windowHeight)*0.01);
ellipsoid(50,50,50);

  moons( 4 , 200 , 50 , frameCount*0.09 , frameCount*0.01);
      // 10 is too big and 9 lags it   (4 is the best)
camera(2000);

}

var moons = function( add , dis , die ,angx,angy ){
 
         var xax;
         for(xax = 0; xax < add; xax++ ){
  
   
  
  push();
        
            rotateX(angx+xax/add*PI);
            rotateY(angy+xax/add*PI);
//            rotateX( angx + xax/add*2*PI);
         
           
           translate ( 100 , 0 ,0 );
            ellipsoid (die, die, die);
          
          
          if (die > 10){
           
            moons ( add ,dis*0.7 , die-10 , angx*1.1 , angy*1.1 );
           
         
          }
          pop();
         }
};
