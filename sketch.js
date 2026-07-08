
function setup() {
  // Crée un canevas magique qui prend tout l'arrière-plan du site
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  canvas.style('z-index', '-1'); // Met le dessin DERRIÈRE ton texte HTML
  background(250);
  noStroke();
}

function draw() {
  // Option A : Des petites bulles d'art aléatoires qui apparaissent très doucement
  if (random(1) < 0.05) {
    fill(random(200, 255), random(200, 255), random(200, 255), 150);
    ellipse(random(width), random(height), random(10, 50));
  }
}

// Si l'utilisateur change la taille de sa fenêtre, le fond s'adapte
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(250);
}
