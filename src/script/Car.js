export class Car {
    #modifier = 5;
    #leftArrow = false;
    #rightArrow = false;

    constructor(element, gameArea){
        this.element = element;
        this.gameArea = gameArea;
    }
  init() {
    this.#setPosition();
    this.#eventListeners();
    this.#gameLoop();
  }
  
  #setPosition(){
    this.element.style.bottom = '1px';
    this.element.style.left = `${
      window.innerWidth / 2 - this.#getPosition()
    }px`;
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
      if (this.#leftArrow &&
            this.#getPosition() >
            (this.gameArea.getBoundingClientRect().left + 40)){
        this.element.style.left = `${parseInt(this.element.style.left, 10) - this.#modifier
        }px`;
      }
      if (this.#rightArrow && 
        this.#getPosition() < 
        (this.gameArea.getBoundingClientRect().right - 40))
        {
        this.element.style.left = `${parseInt(this.element.style.left, 10) + this.#modifier
        }px`;
      }
  }
}
