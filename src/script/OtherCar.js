export class OtherCar {
    constructor(container, intervalTime, carSpeed, otherCarClass){
        this.container = container;
        this.intervalTime = intervalTime;
        this.carSpeed = carSpeed;
        this.otherCarClass = otherCarClass;
        this.element = document.createElement('div');
    }
    #carSpeed = 3;
    
    init(){
        this.#setCar();
        this.#updatePosition();
    }
    
    #setCar(){
        this.element.classList.add('other-car');
        this.element.classList.add(this.otherCarClass);
        this.element.style.top = "-150px";
        this.element.style.left = `${this.#randomDrivingCarPosition()}px`;
        this.container.appendChild(this.element);
    }
    
    #randomDrivingCarPosition(){
        return Math.floor(
            Math.random() * 
            this.container.offsetWidth + 
            this.container.getBoundingClientRect().left - 
            (this.element.offsetWidth)
        );
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

