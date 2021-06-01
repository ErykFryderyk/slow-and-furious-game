import { Game } from './Game.js';

class initializeGame {
    gameObject = null; 

    startContainer = document.querySelector('[data-wrapper-game]');
    selectCarsContainer = document.querySelector('[data-wrapper-select-cars]');
    gameBoard = document.querySelector('[data-game-board]');
    inputName = document.querySelector('[data-input-name]');
    startGameBtn = document.querySelector('[data-start-game]');
    playBtn = document.querySelector('[data-play-btn]');
    modal = document.querySelector('[data-modal]');
    playAgainBtn = document.querySelector('[data-play-again]');

    initGame(){
        this.startGameBtn.addEventListener('click', () => {
            this.selectCar()}
        );

        this.inputName.addEventListener('keyup', () => {
            this.checkError()}
        );

        this.playBtn.addEventListener('click', () => {
            this.startGame();
        });
        this.playAgainBtn.addEventListener('click', () => {
            console.log(this.gameObject);
            this.gameObject = null;
            this.selectCar();
        });
    }
    selectCar(){
        if(this.inputName.value != ''){
            this.startContainer.classList.add('hide');
            this.selectCarsContainer.classList.remove('hide');
            this.modal.classList.add('hide');
        } else {
            this.inputName.classList.add('input__game-start--error');
        }
    }
    startGame() {
        this.gameObject = new Game(this.gameBoard);

        this.selectCarsContainer.classList.add('hide');
        this.gameBoard.classList.remove('hide');

        this.gameObject.init();
    }
    checkError(){
        if(this.inputName.value.length > 1){
            this.inputName.classList.remove('input__game-start--error');
        }
    }
}

window.onload = function(){
    const game = new initializeGame();

    game.initGame();
}