let circles = [];

function setup() {
  // 產生一個全視窗畫布
  createCanvas(windowWidth, windowHeight);
  // 畫布顏色為#bde0fe
  background('#bde0fe');

  // 產生 50 個菱形，隨機位置與大小
  for (let i = 0; i < 50; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 50),
      color: color(random(255), random(255), random(255))
    });
  }
}

function draw() {
  // 清除畫布
  background('#bde0fe');

  // 計算滑鼠影響的大小變化
  let sizeOffset = map(mouseX, 0, width, 20, 80);

  // 繪製所有菱形
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    push();
    translate(circle.x, circle.y);
    rotate(PI / 4); // 旋轉 45 度，將正方形變成菱形
    rectMode(CENTER);
    rect(0, 0, circle.size + sizeOffset, circle.size + sizeOffset);
    pop();
  }
}

