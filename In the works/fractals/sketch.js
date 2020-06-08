var slider;
let button;

bgColor = "#808080"
function setup() {
  createCanvas(400, 400);
  //slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  //slider.position(80,420);


  button = createButton('Reset');
  button.position(10, 420);
  button.mousePressed(reset);
}

function reset()
{
  //slider.value(angle);
  redraw();
}

function draw() {
  background(bgColor);
  ///angle = slider.value();
  stroke(255);
  drawSquare(10,10,20);
  drawSquare(10,20,20);
}

function drawSquare(x,y,len) {
  square(x, y, len);
}
