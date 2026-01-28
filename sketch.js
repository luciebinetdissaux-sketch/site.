function setup() {
  createCanvas(620, 420);
 }

function draw() {
  background(220);
  for (let i = 0; i<15; i += 1) {
    for (let j = 0; j<10; j += 1) {
      if (i!==int((mouseX-10)/40) || j!==int((mouseY-10)/40))
          {
          couleur = color(0,255,0);
          fill(couleur);
          rect(40*i+10,40*j+10,40,40);
          line( 40*i+20,40*j+20,40*i+40,40*j+40);
          line( 40*i+40,40*j+20,40*i+20,40*j+40);
          }
      else if (j<5) {couleur = color(255,255,0);
            fill(couleur);
            rect(40*i+10,40*j+10,40,40);
            fill(color(0,0,250));
            rect(40*i+20,40*j+20,20,20);}
      else if (i<8) {couleur = color(255,255,0);
            fill(couleur);
            rect(40*i+10,40*j+10,40,40);
            line( 40*i+20,40*j+20,40*i+40,40*j+40);
            line( 40*i+30,40*j+20,40*i+40,40*j+30);
            line( 40*i+20,40*j+20,40*i+40,40*j+20);
            line( 40*i+40,40*j+20,40*i+40,40*j+40);
            }
        else
          {
            couleur = color(255,0,0);
            fill(couleur);
            rect(40*i+10,40*j+10,40,40);
            fill(color(0,0,250));
            circle(40*i+30,40*j+30,20);
          }
          }
      }
      
     
}
