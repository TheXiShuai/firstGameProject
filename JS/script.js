const newGame = new Game();
const newPlayer = new Player();


document.addEventListener("DOMContentLoaded", function() {
  // Play the background music when the page loads
  const backgroundMusic = document.getElementById("backgroundMusic");
  backgroundMusic.play();
});

function handleKeyboardInput(key) {
  if (key === "ArrowLeft") {
    newPlayer.x -= 10
    if(newPlayer.x < 0){
       newPlayer.x = 0;
    }
    // Add logic to change style.left of the player
  } else if (key === "ArrowRight"){
    newPlayer.x += 10;
    if(newPlayer.x > 600 - newPlayer.width){
        newPlayer.x = 600 - newPlayer.width;
    }
  }
  newPlayer.playerElement.style.left = `${newPlayer.x}px`;
}

document.addEventListener("keydown",(event) => {
  event.preventDefault();
    handleKeyboardInput(event.key)
  })
 
function random(max, min){
  return Math.round(Math.random() * (max-min) + min);
 }



function fallingObstacles(){
  const obstacles = newGame.obstacles;
  let divBall = document.createElement("div");
  divBall.classList.add("ball");
  newGame.gameContainerElement.appendChild(divBall);
  divBall.style.left = random(600, 0) + "px";
  obstacles.push(divBall);
}

setInterval(() => {
    fallingObstacles()
    
}, 4000);

setInterval(() => {
  makeBallsDrop()
  collissionDetectionForCircles()
  updatePoints()

},300);

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

  // Loop through all rewards and check for collisions
  for (const obstacle of newGame.obstacles) {
      // Calculate the center coordinates of the reward circle
      const obstacleX = obstacle.offsetLeft + obstacle.offsetWidth / 2;
      const obstacleY = obstacle.offsetTop + obstacle.offsetHeight / 2;

      // Calculate the distance between the two circles' centers
      const distance = Math.sqrt((playerX - obstacleX) ** 2 + (playerY - obstacleY) ** 2);

      // Calculate the minimum distance needed for a collision (sum of the radii)
      const minDistance = newPlayer.playerElement.offsetWidth / 2 + obstacle.offsetWidth / 2;

      // If the distance is less than the minimum distance, a collision is detected
      if (distance < minDistance) {
          updateLives()
          // Remove the obstacle from the DOM
          obstacle.remove();
      }
    

  }
}

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


function updateLives(){
  
      newGame.lives -= 1;
      document.getElementById("lives").innerHTML = newGame.lives;
      if(newGame.lives < 0){
        window.alert("GAME OVER");
        location.reload();
      }
 

  

}

const resetButton = document.getElementById("resetButton");

resetButton.addEventListener("click", function(event) {
  
  if (resetButton) {
      location.reload();
  }
});














  
 
  
  





