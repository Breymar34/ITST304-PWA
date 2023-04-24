/*var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var blockSize = 10;
var width = canvas.width / blockSize;
var height = canvas.height / blockSize;
var snake = {
  body: [{ x: 3, y: 2 }, { x: 2, y: 2 }, { x: 1, y: 2 }],
  direction: "right",
};
var food = { x: 7, y: 7 };
var score = 0;
var intervalId;

function drawBlock(x, y) {
  ctx.fillRect(x * blockSize, y * blockSize, blockSize, blockSize);
}

function drawSnake() {
  snake.body.forEach(function (block) {
    drawBlock(block.x, block.y);
  });
}

function drawFood() {
  drawBlock(food.x, food.y);
}

function moveSnake() {
  var head = { x: snake.body[0].x, y: snake.body[0].y };
  switch (snake.direction) {
    case "up":
      head.y -= 1;
      break;
    case "down":
      head.y += 1;
      break;
    case "left":
      head.x -= 1;
      break;
    case "right":
      head.x += 1;
      break;
  }
  if (head.x < 0 || head.x >= width || head.y < 0 || head.y >= height) {
    clearInterval(intervalId);
    alert("Game over! Your score was " + score);
  } else if (head.x === food.x && head.y === food.y) {
    snake.body.unshift(head);
    food = {
      x: Math.floor(Math.random() * width),
      y: Math.floor(Math.random() * height),
    };
    score += 10;
    document.getElementById("score").innerHTML = score;
  } else {
    snake.body.pop();
    snake.body.unshift(head);
  }
}

function changeDirection(event) {
  switch (event.keyCode) {
    case 37:
      snake.direction = "left";
      break;
    case 38:
      snake.direction = "up";
      break;
    case 39:
      snake.direction = "right";
      break;
    case 40:
      snake.direction = "down";
      break;
  }
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawSnake();
  drawFood();
  moveSnake();
}

document.addEventListener("keydown", changeDirection);
intervalId = setInterval(gameLoop, 500);*/
