let data = []

let m = 1;
let b = 0;

function setup() {
  createCanvas(400, 400);
  background(50);
}

function drawLine() {
  let x1 = 0;
  let x2 = 1;
  let y1 = m * x1 + b;
  let y2 = m * x2 + b;

  x1 = map(x1, 0, 1, 0, width);
  y1 = map(y1, 0, 1, height, 0);
  x2 = map(x2, 0, 1, 0, width);
  y2 = map(y2, 0, 1, height, 0);

  stroke(255);
  line(x1, y1, x2, y2);
}

function linearRegression() {
  let xsum = 0;
  let ysum = 0;

  for (let i = 0; i < data.length; i++) {
    xsum += data[i].x;
    ysum += data[i].y;
  }
  let xmean = 0;
  let ymean = 0;
  xmean = xsum / data.length;
  ymean = ysum / data.length;

  let num = 0;
  let den = 0;
  for (let i = 0; i < data.length; i++) {
    num += (data[i].x - xmean) * (data[i].y - ymean);
    den += (data[i].x - xmean) * (data[i].x - xmean);
  }

  m = num / den;

  b = ymean - (m * xmean);
}

function draw () {
  background(50);

  for (let i = 0; i < data.length; i++) {
    let x = map(data[i].x, 0, 1, 0, width);
    let y = map(data[i].y, 0, 1, height, 0);

    fill(255);
    stroke(255);
    ellipse(x, y, 3, 3);
  }

  if (data.length < 0) {
    drawLine();
  } else {
    drawLine();
    linearRegression();
  }

}

function mousePressed () {
  let x = map(mouseX, 0, width, 0, 1);
  let y = map(mouseY, 0, height, 1, 0);

  let point = createVector(x, y);

  data.push(point);

  //console.log(`point at x: ${x}, y: ${y}`);
}

function print(text) {
  console.log(text);
}
