export class OtherCar {
    constructor(container, intervalTime, carSpeed, otherCarClass){
        this.container = container;
        this.intervalTime = intervalTime;
        this.carSpeed = carSpeed;
        this.otherCarClass = otherCarClass;
        this.element = document.createElement('div');
    }
    
    init(){
        this.#setCar();
        this.#updatePosition();
    }
    
    #setCar(){
        let road = this.#randomDrivingCarPosition();
        this.element.classList.add('other-car');
        this.element.classList.add(this.otherCarClass);
        this.element.style.top = "-200px";
        // this.element.style.left = `${this.#randomDrivingCarPosition()}px`;

        if(road == '0'){
            this.carSpeed *= 1.5;
            this.element.style.left = '90px';
        }else if(road == '1'){
            this.carSpeed *= 1.5;
            this.element.style.left = '260px';
        }else if(road == '2'){
            this.element.style.left = '435px';
            this.element.style.transform = 'rotate(0deg)';
        }else if(road == '3'){
            this.element.style.left = '600px';
            this.element.style.transform = 'rotate(0deg)';
        }else {
            return;
        };
        this.container.appendChild(this.element);
    }
    
    #randomDrivingCarPosition(){
        return Math.floor(Math.random() * 4);
    }

    #updatePosition(){
        setInterval(() => this.#setNewPosition(), this.intervalTime);
    }
    #setNewPosition(){
        this.element.style.top = `${this.element.offsetTop + this.carSpeed}px`
    }

    remove(){
        clearInterval(this.interval);
        this.element.remove();
    }
}

