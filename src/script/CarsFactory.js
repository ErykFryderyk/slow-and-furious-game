import {Car} from './Car.js'; 
export class CarsFactory {

    constructor(){
        this.mustang = new Car('Car.png', 6);
        this.audi = new Car('Audi.png', 10);
        this.viper = new Car('Black_viper.png', 15);
    }
    
    getCar(car) {
        switch (car) {
            case 'mustang':
                return this.mustang;
            case 'audi':
                return this.audi;
            case 'viper': 
                return this.viper;
        }
    }
}