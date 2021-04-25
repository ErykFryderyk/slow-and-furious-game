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
  #intervalValue = 1000;

  init() {
    this.#car.init();
    this.#newGame();
  }

  #newGame(){
    this.#otherCarsInterval = 10;
    // this.#createOtherCarInterval = setInterval(() => this.#randomNewOtherCar(), this.#intervalValue);
    // this.#checkPositionInterval = setInterval(() => this.#checkPosition(), 1);
  }

  #randomNewOtherCar(){
    const randomNumber = Math.floor(Math.random() * 5) + 1
    randomNumber % 5 
    ? this.#createNewOtherCar(
        this.#htmlElements.roadway,
        this.#otherCarsInterval,
        this.#carSpeed, 
        'pickup'
      ) 
    : 
      this.#createNewOtherCar(
        this.#htmlElements.roadway,
        this.#otherCarsInterval, 
        this.#carSpeed,
        'van'
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
        this.#carSpeed;
        this.#intervalValue--;
        console.log(this.#intervalValue);
      }
    })
  }
}

window.onload = function () {
  const game = new Game();
  game.init();
};