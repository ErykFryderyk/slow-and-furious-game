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
        this.element.classList.add('other-car');
        this.element.classList.add(this.otherCarClass);
        this.element.style.top = "-150px";
        this.element.style.left = `${this.#randomDrivingCarPosition()}px`;
        if(this.element.style.left <= '350px'){
            this.carSpeed *= 2;
        }else {
            this.element.style.transform = 'rotate(0deg)';
        };
        this.container.appendChild(this.element);
    }
    
    #randomDrivingCarPosition(){
        return Math.floor(
            Math.random() * 
            this.container.offsetWidth + 
            this.container.getBoundingClientRect().x + 
            this.element.offsetWidth
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

