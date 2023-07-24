class Game{
    constructor(){
        this.gameContainerElement = document.getElementById("gameContainer");
        this.score = 0;
        this.lives = 5;
        this.damage = 1;
        this.remainedHealth = this.lives - this.damage;
        this.gameIsOver = false;
        this.playerStatsElement = document.getElementById("playerStats");
        this.buttonContainerElement = document.getElementById("button-container");
        this.enemies = document.getElementById("enemy")
    }


}

