function handleKeyboardInput(key){
 
    if(key === "ArrowLeft"){
      game.player.directionX = -1;
    }
    else if(key === "ArrowRight"){
      game.player.directionX = 1;
    }
  }
