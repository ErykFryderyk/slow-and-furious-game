export class Car {
  constructor(element, container, score, modifier){
      this.element = element;
      this.gameArea = container;
      this.score = score;
  } 
  modifier = null;
  #leftArrow = false;
  #rightArrow = false;
    
  init(selectedCar) {
    this.setPosition(selectedCar);
    this.modifier = this.get(selectedCar)
    this.#eventListeners();
    this.#gameLoop();
  }

  get(car) {
    switch (car) {
      case 'mustang':
        return 5;
      case 'audi':
        return 8;
      case 'viper': 
        return 11;
    }
  }

  checkingScore(score){
    if(score >= 30){
      this.#removeAttribute();
    }
  }

  #removeAttribute() {
    document.querySelector('#audi').removeAttribute('disabled');
  }
  
  setPosition(carName){
    this.element.style.backgroundImage = `url('../src/img/${carName}.png')`;
    this.element.style.bottom = '1px';
    this.element.style.left = `${
      window.innerWidth / 2 - this.#getPosition()
     + 100}px`;
  }
  
  #getPosition(){
    return this.element.offsetLeft + this.element.offsetWidth / 2;
  }
  
  #eventListeners(){
    window.addEventListener('keydown', ({keyCode}) => {
      switch(keyCode){
        case 37:
          this.#leftArrow = true;
          this.element.classList.add('turn-left');
          break;
        case 39:
          this.#rightArrow = true;
          this.element.classList.add('turn-right');
          break;
      }
    });
    window.addEventListener('keyup', ({keyCode}) => {
      switch(keyCode){
        case 37:
          this.#leftArrow = false;
          this.element.classList.remove('turn-left');
        break;
        case 39:
          this.#rightArrow = false;
          this.element.classList.remove('turn-right');
         break;
      }
    });
  }

  #gameLoop = () =>{
      this.#whatKey();
      requestAnimationFrame(this.#gameLoop);
  }
  #whatKey(){
    if (
      this.#leftArrow &&
      this.#getPosition() > (this.gameArea.getBoundingClientRect().left + 40))
      {
        this.element.style.left = `${parseInt(this.element.style.left, 10) - this.modifier}px`;
      }
    if (
      this.#rightArrow && 
      this.#getPosition() < (this.gameArea.getBoundingClientRect().right - 40))
      {
        this.element.style.left = `${parseInt(this.element.style.left, 10) + this.modifier}px`;
      }
  }

  
}
