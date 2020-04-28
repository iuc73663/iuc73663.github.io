var angle = 0;
var slider;
let button;

bgColor = "#808080"
function setup() {
  createCanvas(400, 400);
  slider = createSlider(0, TWO_PI, PI / 4, 0.01);
  slider.position(80,420);

  colorPicker = createColorPicker(bgColor);
  colorPicker.position(420, 0);

  button = createButton('Reset');
  button.position(10, 420);
  button.mousePressed(reset);
}

function reset()
{
  angle = PI / 4;
  slider.value(angle);
  redraw();
}

function draw() {
  bgColor = colorPicker.color()
  background(bgColor);
  angle = slider.value();
  stroke(255);
  translate(200, height);
  branch(100);
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 3) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.5);
    pop();
  }
}
