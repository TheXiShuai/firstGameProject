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