import { Game } from './Game.js';

const startContainer = document.querySelector('[data-wrapper-game]');
const selectCarsContainer = document.querySelector('[data-wrapper-select-cars]');
const gameBoard = document.querySelector('[data-game-board]');
const inputName = document.querySelector('[data-input-name]');
const startGameBtn = document.querySelector('[data-start-game]');
const playBtn = document.querySelector('[data-play-btn]');
const modal = document.querySelector('[data-modal]');
const playAgainBtn = document.querySelector('[data-play-again]');

const startGame = () => {
    if(inputName.value !== ''){
        startContainer.classList.add('hide');
        selectCarsContainer.classList.remove('hide');
    } else {
        inputName.classList.add('input__game-start--error');
    }
}

const checkError = () => {
    if(inputName.value.length > 1){
        inputName.classList.remove('input__game-start--error');
    }
}


inputName.addEventListener('keyup', checkError);
startGameBtn.addEventListener('click', startGame);
playBtn.addEventListener('click', () => {
    selectCarsContainer.classList.add('hide');
    gameBoard.classList.remove('hide');

    const game = new Game(gameBoard);
    game.init();
});

playAgainBtn.addEventListener('click', () => {
    modal.classList.add('hide');
    selectCarsContainer.classList.remove('hide');
})


