import { Car } from "./Car.js";
import { OtherCar } from './OtherCar.js';

class Game {
  #htmlElements = {
      car: document.querySelector('[data-car]'),
      roadway: document.querySelector('[data-roadway]')
  }  
  #car = new Car(
    this.#htmlElements.car, 
    this.#htmlElements.roadway
  );

  #cars = [];
  #otherCarsInterval = null;
  #checkPositionInterval = null;
  #createOtherCarInterval = null;
  #carSpeed = 5;
  #intervalValue = 1500;
  #carsClassArray = ['truck', 'pickup', 'van', 'taxi', 'audi', 'police'];



  init() {
    this.#car.init();
    this.#newGame();
  }

  #newGame(){
    this.#otherCarsInterval = 10;
    // this.#createOtherCarInterval = setInterval(() => this.#randomNewOtherCar(), this.#intervalValue);
    // this.$createOtherCarInterval = this.#loop();
    this.#checkPositionInterval = setInterval(() => this.#checkPosition(), 1);
  }

  #loop(){
    this.#intervalValue = Math.round(Math.random() * (1000-500)) + 500;
      setTimeout(() => {
            this.#randomNewOtherCar();
            this.#loop();
      }, this.#intervalValue);
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

  #checkPosition(){
    this.#cars.forEach((car, carIndex, carsArr) => {
      const carPosition = {
        top: car.element.offsetTop,
        right: car.element.offsetLeft + car.element.offsetWidth,
        bottom: car.element.offsetTop + car.element.offsetHeight,
        left: car.element.offsetLeft,
      };
      if(carPosition.top > window.innerHeight){
        car.remove();
        carsArr.splice(carIndex, 1);
        // this.#carSpeed += 0.2;
        // console.log(this.#carSpeed);
      }
      if(
        this.#car.playerPosition.bottom >= carPosition.top && 
        this.#car.playerPosition.top <= carPosition.bottom &&
        this.#car.playerPosition.right >= carPosition.left &&
        this.#car.playerPosition.left <= carPosition.right){
          car.remove();
          carsArr.splice(carIndex, 1);
        }
    })
  }
}

window.onload = function () {
  const game = new Game();
  game.init();
};