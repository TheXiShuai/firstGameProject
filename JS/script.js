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
    
}, 3000);

setInterval(() => {
  makeBallsDrop()

},150);

function makeBallsDrop(){
  newGame.obstacles.forEach((obstacle)=>{
    let position = obstacle.offsetTop + 10;
    obstacle.style.top = position + 'px';
  }
  )
}
















  
 
  
  





