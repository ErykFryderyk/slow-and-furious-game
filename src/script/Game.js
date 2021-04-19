import { Car } from "./Car.js";
import { OtherCar } from './OtherCar.js';

class Game {
  #htmlElements = {
      car: document.querySelector('[data-car]'),
      roadway: document.querySelector('[data-roadway]')
  }  
  #car = new Car(this.#htmlElements.car, this.#htmlElements.roadway);

  init() {
    this.#car.init();
    // this.#otherCar.init();
  }
}

window.onload = function () {
  const game = new Game();
  game.init();
};