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

        if(road == '0'){
            this.carSpeed *= 1.5;
            this.element.style.left = `${this.container.offsetLeft + 20}px`;
        }else if(road == '1'){
            this.carSpeed *= 1.5;
            this.element.style.left = `${this.container.offsetLeft + 210}px`;
        }else if(road == '2'){
            this.element.style.left = `${this.container.offsetLeft + 390}px`;
            this.element.style.transform = 'rotate(0deg)';
        }else if(road == '3'){
            this.element.style.left = `${this.container.offsetLeft + 550}px`;
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
        this.element.remove();
    }
}

