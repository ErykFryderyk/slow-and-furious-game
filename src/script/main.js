const inputName = document.querySelector('[data-input-name]');
const startGameBtn = document.querySelector('[data-start-game]');


console.log(startGameBtn);

const startGame = () => {
    if(inputName.value !== ''){
        console.log('START!!!');
    } else {
        console.log('Wypełnij input');
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


