//event listeners, functions, variables and loops. file created to do those.

const newGame = new Game(); //variable to store game.js
const newPlayer = new Player(); //variable to store player.js

  // Play the background music when the page loads
document.addEventListener("DOMContentLoaded", function() {
  const backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.play();
});
    //tells the player to move through X axis and do not exceed the boundaries of the game container.
function handleKeyboardInput(key) {

  if (key === "ArrowLeft") {
    newPlayer.x -= 20;
    if(newPlayer.x < 0){
       newPlayer.x = 0;
    }
  } else if (key === "ArrowRight"){
    newPlayer.x += 20;
    if(newPlayer.x > 600 - newPlayer.width){
        newPlayer.x = 600 - newPlayer.width;
    }
  }
  newPlayer.playerElement.style.left = `${newPlayer.x}px`;
}
  //the player will be moving when pressing the left and right arrows
document.addEventListener("keydown",(event) => {
  event.preventDefault();
    handleKeyboardInput(event.key)
  })
 
  // appearence of the obstacles (balls) randomly on the top, this formula has been used to achieve that.
function random(max, min){
  return Math.round(Math.random() * (max-min) + min);
 }

 // here is the interaction in the DOM, creating a class .ball for CSS and to create several balls.
function fallingObstacles(){
  const obstacles = newGame.obstacles;
  let divBall = document.createElement("div");
  divBall.classList.add("ball");
  newGame.gameContainerElement.appendChild(divBall);
  divBall.style.left = random(600, 0) + "px";
  obstacles.push(divBall);
}
//the interval between each drop using the upper function.
setInterval(() => {
    fallingObstacles()
    
}, 4000);

//interval of collision detection between player/ bottom and falling obstacle.
setInterval(() => {
  makeBallsDrop()
  collissionDetectionForCircles()
  updatePoints()

},50);

function makeBallsDrop(){
  newGame.obstacles.forEach((obstacle)=>{
    let position = obstacle.offsetTop + 10;
    obstacle.style.top = position + 'px';
  }
  )
}

function collissionDetectionForCircles() {

  const playerX = newPlayer.playerElement.offsetLeft + newPlayer.playerElement.offsetWidth / 2;
  const playerY = newPlayer.playerElement.offsetTop + newPlayer.playerElement.offsetHeight / 2;

  // Loop through check for collisions
  for (const obstacle of newGame.obstacles) {
      // Calculate the center coordinates of the obstacle circle
      const obstacleX = obstacle.offsetLeft + obstacle.offsetWidth / 2;
      const obstacleY = obstacle.offsetTop + obstacle.offsetHeight / 2;

      // Calculate the distance between the two circles' centers
      const distance = Math.sqrt((playerX - obstacleX) ** 2 + (playerY - obstacleY) ** 2);

      // Calculate the minimum distance needed for a collision (sum of the radius)
      const minDistance = newPlayer.playerElement.offsetWidth / 2 + obstacle.offsetWidth / 2;

      // If the distance is less than the minimum distance, a collision is detected
      if (distance < minDistance) {
          updateLives()
          // Remove the obstacle from the DOM
          obstacle.remove();
      }
    

  }
}
// function to update points, one point per ball crossed through X axis (when obstacle exceeds 700px which is the gameContainer height);

function updatePoints(){
    newGame.obstacles.forEach((obstacle)=>{
      if(obstacle.offsetTop > 700){
        newGame.score += 1;
        obstacle.remove();
        document.getElementById("score").innerHTML = newGame.score;  
      } 
    }
    )
}

// function to update the lives counter, it deducts -1 when touching the player, the lives by default when dtarting the game are set to 5.
function updateLives(){
  
      newGame.lives -= 1;
      document.getElementById("lives").innerHTML = newGame.lives;
      if(newGame.lives < 0){
        window.alert("GAME OVER");
        location.reload();
      }
}

// reset button refreshes the page, we 
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", function(event) {
  
  if (resetButton) {
      location.reload();
  }
});














  
 
  
  





