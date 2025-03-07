function setup() {
    createCanvas(400, 400);
  }
  let olhoX;
  let olhoY;
  
  function draw() {
    background("blue");
    fill("purple");
    circle(200, 200, 295); // rosto
    fill("pink");
    circle(150, 150, 50); // olho esquerdo
    circle(250, 150, 50); // olho direito
    line(150, 270, 250, 215); // boca
    fill("black");
    triangle(200, 180, 170, 220, 220, 210); // nariz
    line(123, 115, 178, 110); // sobrancelha esquerda
    line(225, 116, 279, 107); // sobrancelha direita
    // circle(150,150,10); // pupila esquerda
    //circle(250,150,10); // pupila direita
  
    olhoX = map(mouseX, 0, 400, 130, 170);
    olhoY = map(mouseY, 0, 400, 130, 170);
  
    circle(olhoX, olhoY, 10); // nova pupila esquerda
    circle(olhoX + 100, olhoY, 10); //nova pupila direita
    if (mouseIsPressed) {
      console.log(mouseX, mouseY);
    }
  }
  