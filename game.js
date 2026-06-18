const playerCar = document.getElementById("playerCar");
const enemyCar = document.getElementById("enemyCar");
const gameArea = document.getElementById("gameArea");
const scoreText = document.getElementById("score");
const startScreen = document.getElementById("startScreen");
const gameOverScreen = document.getElementById("gameOver");
const finalScoreText = document.getElementById("finalScore");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

let playerX = 137;
let enemyY = -90;
let enemyX = 137;
let score = 0;
let speed = 4;
let gameRunning = false;
let gameLoop;

const desktopLanes = [72, 137, 202];
const mobileLanes = [57, 122, 187];
const smallMobileLanes = [42, 107, 172];

function getLanes() {
  const width = gameArea.offsetWidth;

  if (width <= 260) {
    return smallMobileLanes;
  }

  if (width <= 290) {
    return mobileLanes;
  }

  return desktopLanes;
}

function startGame() {
  startScreen.style.display = "none";
  gameOverScreen.style.display = "none";

  const lanes = getLanes();

  playerX = lanes[1];
  enemyX = lanes[Math.floor(Math.random() * lanes.length)];
  enemyY = -90;
  score = 0;
  speed = 4;
  gameRunning = true;

  playerCar.style.left = playerX + "px";
  enemyCar.style.left = enemyX + "px";
  enemyCar.style.top = enemyY + "px";
  scoreText.textContent = score;

  clearInterval(gameLoop);
  gameLoop = setInterval(updateGame, 20);
}

function updateGame() {
  if (!gameRunning) return;

  enemyY += speed;
  enemyCar.style.top = enemyY + "px";

  if (enemyY > gameArea.offsetHeight) {
    const lanes = getLanes();

    enemyY = -90;
    enemyX = lanes[Math.floor(Math.random() * lanes.length)];
    enemyCar.style.left = enemyX + "px";

    score++;
    scoreText.textContent = score;

    increaseSpeedByScore();
  }

  checkCollision();
}

function increaseSpeedByScore() {
  if (score > 0 && score % 5 === 0) {
    speed += 1.5;
  }

}

function checkCollision() {
  const playerRect = playerCar.getBoundingClientRect();
  const enemyRect = enemyCar.getBoundingClientRect();

  const hit =
    playerRect.left < enemyRect.right &&
    playerRect.right > enemyRect.left &&
    playerRect.top < enemyRect.bottom &&
    playerRect.bottom > enemyRect.top;

  if (hit) {
    endGame();
  }
}

function endGame() {
  gameRunning = false;
  clearInterval(gameLoop);

  document.querySelector("#gameOver h3").textContent = "Game Over";
  finalScoreText.textContent = score;
  gameOverScreen.style.display = "flex";
}

function restartGame() {
  clearInterval(gameLoop);
  startGame();
}

function moveLeft() {
  if (!gameRunning) return;

  const lanes = getLanes();
  const currentIndex = lanes.indexOf(playerX);

  if (currentIndex > 0) {
    playerX = lanes[currentIndex - 1];
    playerCar.style.left = playerX + "px";
  }
}

function moveRight() {
  if (!gameRunning) return;

  const lanes = getLanes();
  const currentIndex = lanes.indexOf(playerX);

  if (currentIndex < lanes.length - 1) {
    playerX = lanes[currentIndex + 1];
    playerCar.style.left = playerX + "px";
  }
}

document.addEventListener("keydown", function (event) {
  if (event.key === "ArrowLeft") {
    moveLeft();
  }

  if (event.key === "ArrowRight") {
    moveRight();
  }
});

leftBtn.addEventListener("click", moveLeft);
rightBtn.addEventListener("click", moveRight);