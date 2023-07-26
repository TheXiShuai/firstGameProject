const newGame = new Game();
const newPlayer = new Player();


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
          
          // UPDATE POINTS updatepoints()
          // UPDATE LIFES

          // Remove the obstacle from the DOM
          obstacle.remove();
      }
  }
}

function updatePoints(){
    if(newPlayer.playerElement.distance === newGame.obstacles.distance){
      return newGame.lives + 1;
    }

}


function updateLives(){

}


function resetGame(){

  const resetButton = newGame.buttonContainerElement;

  

}













  
 
  
  





