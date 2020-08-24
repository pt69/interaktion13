var durchmesserSlider, liniendickeSlider;

function setup() {
  // create canvas
  createCanvas(400, 400);

  // create sliders
  durchmesserSlider = createSlider(0, 300, 100);
  durchmesserSlider.position(20, 20);
  liniendickeSlider = createSlider(0, 30, 1);
  liniendickeSlider.position(20, 50);
}

function draw() {
  background('teal');
  var durchmesser = durchmesserSlider.value();
  var liniendicke = liniendickeSlider.value();
  fill(255);
  stroke(230);
  strokeWeight(liniendicke);
  ellipse(width/2, height/2, durchmesser, durchmesser);
}