<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <title>Car Game | My Portfolio</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link 
    href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Orbitron:wght@500;600;700&display=swap" 
    rel="stylesheet"
  >

  <link rel="stylesheet" href="style.css" />
</head>
<body>

  <div class="background-animation">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

  <header>
    <nav>
      <h2 class="logo">My Portfolio</h2>

      <ul class="nav-links">
        <li><a href="./index.html">Home</a></li>
        <li><a href="./about.html">About</a></li>
        <li><a href="./skills.html">Skills</a></li>
        <li><a href="./projects.html">Projects</a></li>
        
        <li><a href="./contact.html">Contact</a></li>
        <li><a href="./game.html" class="active-link">Game</a></li>
      </ul>
    </nav>
  </header>

  <main class="page-transition">

    <section class="page-hero">
      <h1 class="reveal-up">Mini <span>Car Game</span></h1>
      <p class="reveal-up">
        A small JavaScript car game added to my portfolio project.
      </p>
    </section>

    <section class="game-section">

      <div class="game-info reveal-left">
        <h2>Car Racing Game</h2>
        <p>
          Use the left and right arrow keys on desktop. On mobile, use the buttons below.
          Avoid the red enemy cars and try to get the highest score.
        </p>
      </div>

      <div class="game-wrapper reveal-right">
        <div class="score-board">
          Score: <span id="score">0</span>
        </div>

        <div class="game-area" id="gameArea">
          <div class="road-line line-one"></div>
          <div class="road-line line-two"></div>
          <div class="road-line line-three"></div>

          <div class="enemy-car" id="enemyCar"></div>
          <div class="player-car" id="playerCar"></div>

          <div class="start-screen" id="startScreen">
            <h3>Mini Car Game</h3>
            <p>Click Start to play</p>
            <button onclick="startGame()">Start Game</button>
          </div>

          <div class="game-over" id="gameOver">
            <h3>Game Over</h3>
            <p>Your Score: <span id="finalScore">0</span></p>
            <button onclick="restartGame()">Restart</button>
          </div>
        </div>

        <div class="mobile-controls">
          <button id="leftBtn">⬅</button>
          <button id="rightBtn">➡</button>
        </div>
      </div>

    </section>

  </main>

  <footer>
    <p>© 2026 Your Name. All Rights Reserved.</p>
  </footer>

  <script src="script.js"></script>
  <script src="game.js"></script>
</body>
</html>
