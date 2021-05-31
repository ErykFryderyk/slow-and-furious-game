import { Game } from './Game.js';

class initializeGame {
    constructor(){

    }
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
            this.startGame();
        });
        this.inputName.addEventListener('keyup', this.checkError());
        this.startGameBtn.addEventListener('click', this.startGame());
        this.playBtn.addEventListener('click', () => {
            this.selectCarsContainer.classList.add('hide');
            this.gameBoard.classList.remove('hide');

            const game = new Game(gameBoard);
            game.init();
        });
    }
    startGame(){
        console.log('Działą');
        if(this.inputName.value !== ''){
            this.startContainer.classList.add('hide');
            this.selectCarsContainer.classList.remove('hide');
        } else {
            this.inputName.classList.add('input__game-start--error');
        }
    }
    checkError(){
        if(this.inputName.value.length > 1){
            this.inputName.classList.remove('input__game-start--error');
        }
    }
}


// inputName.addEventListener('keyup', checkError);
// startGameBtn.addEventListener('click', startGame);
// playBtn.addEventListener('click', () => {
//     selectCarsContainer.classList.add('hide');
//     gameBoard.classList.remove('hide');

//     const game = new Game(gameBoard);
//     game.init();
// });

// playAgainBtn.addEventListener('click', () => {
//     modal.classList.add('hide');
//     selectCarsContainer.classList.remove('hide');
// })


window.onload = function(){
    const game = new initializeGame();

    game.initGame();
}