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
  #createOtherCarInterval = null;

  init() {
    this.#car.init();
    this.#newGame();
  }

  #newGame(){
    this.#createOtherCarInterval = setInterval(() => this.#createNewOtherCar(), 5000);
  }

  #createNewOtherCar(){
    const car = new OtherCar(this.#htmlElements.roadway, 'other-car');

    car.init();
    this.#cars.push(car);
  }
}

window.onload = function () {
  const game = new Game();
  game.init();
};