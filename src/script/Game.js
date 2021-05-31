import { Car } from "./Car.js";
import { OtherCar } from './OtherCar.js';

export class Game {
  constructor(gameBoard){
    this.container = gameBoard;
  }
  #htmlElements = {
      car: document.querySelector('[data-car]'),
      roadway: document.querySelector('[data-roadway]'),
      score: document.querySelector('[data-score]'),
      yourScore: document.querySelector('[data-your-score]'),
      modal: document.querySelector('[data-modal]'),
      playAgainBtn: document.querySelector('[data-play-again]')
  }  
  #car = new Car(
    this.#htmlElements.car, 
    this.#htmlElements.roadway
  );

  #score = 0;
  #cars = [];
  #otherCarsInterval = null;
  #checkPositionInterval = null;
  #createOtherCarInterval = null;
  #carSpeed = 6;
  #intervalValue = 1500;
  #carsClassArray = ['truck', 'pickup', 'van', 'taxi', 'audi', 'police'];
  
  time = 1500;
  crash = false;


  // Rozpoczęcie gry
  init() {
    this.#clearScore();
    this.#car.init(); // Tworzenie pojazdu gracza.
    this.#newGame();  // Tworzenie wrogich samochodów.
  }

  #newGame(){
    this.#otherCarsInterval = 10;
    this.#checkPositionInterval = setInterval(() => this.#checkPosition(), 1);
    this.#createOtherCarInterval = this.#loop();
  }
  
  #endGame(){
    carsArr.splice(carIndex, 1);
          this.#clearScore();
          this.crash = true;
          this.#car.setPosition();
          this.container.classList.add('hide');
          this.#htmlElements.modal.classList.remove('hide');
  }

  #loop(){
    if(!this.crash){
      this.#intervalValue = Math.round(Math.random() * (this.time-500)) + 500;
      setTimeout(() => {
        this.#randomNewOtherCar();
        this.#loop();
      }, this.#intervalValue);
    }else {
      return;
    }
  }

  #randomNewOtherCar(){
    let carClass;
    let randomNumber = Math.floor(Math.random() * 5) + 1;

    carClass = this.#carsClassArray[randomNumber];

    this.#createNewOtherCar(
      this.#htmlElements.roadway,
        this.#otherCarsInterval,
        this.#carSpeed,
        carClass, 
    ); 
  }
  
  #createNewOtherCar(...params){
    const car = new OtherCar(
      ...params
      );
      
      car.init();
      this.#cars.push(car);
  }

  #clearScore(){
    this.#htmlElements.score.innerHTML = 0;
    this.#score = 0; 
  }

  #checkPosition(){
    this.#cars.forEach((car, carIndex, carsArr) => {
      const carPosition = {
        top: car.element.offsetTop,
        right: car.element.offsetLeft + car.element.offsetWidth,
        bottom: car.element.offsetTop + car.element.offsetHeight,
        left: car.element.offsetLeft,
      }
      if(carPosition.top > window.innerHeight){  // Usuwanie samochodów gdy wyjadą za dolną cześć ekranu
        car.remove();
        carsArr.splice(carIndex, 1);

        if(this.time > 500){
          this.time -=  50;
        }

        this.#score = this.#score + 10; 
        this.#htmlElements.score.innerHTML = this.#score;
      }
      if (
        (this.#car.element.offsetTop + 30) <= carPosition.bottom &&
        (this.#car.element.offsetLeft + this.#car.element.offsetWidth - 15)  >= carPosition.left &&
        (this.#car.element.offsetTop + this.#car.element.offsetHeight - 100) >= carPosition.top && 
        (this.#car.element.offsetLeft + 10) <= carPosition.right){
          this.crash = true;
          this.#htmlElements.yourScore.innerHTML = `Your score: ${this.#score}`;

          carsArr.splice(carIndex, 1);
          carsArr.forEach(car => car.remove());

          this.#car.setPosition();

          this.container.classList.add('hide');
          this.#htmlElements.modal.classList.remove('hide');
        }
    })
  }
}