// Player class to manage player's movements. Hence separate file for keeping the class out.

class Player {
  constructor( left, width){
    this.playerElement = document.getElementById("player");
    this.left = this.playerElement.offsetLeft;
    this.x = 0;
    this.width = this.playerElement.offsetWidth;

  }
}
