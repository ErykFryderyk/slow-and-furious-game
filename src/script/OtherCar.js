export class OtherCar {
    constructor(container, otherCarClass){
        this.container = container;
        this.otherCarClass = otherCarClass;
        this.element = document.createElement('div');
    }
    
    init(){
        this.setCar();
    }
    
    setCar(){
        this.element.classList.add(this.otherCarClass);
        this.element.style.top = '0px';
        this.element.style.left = `${this.#randomDrivingCarPosition()}px`;
        this.container.appendChild(this.element);

    }

    #randomDrivingCarPosition(){
        return Math.floor(Math.random() * window.innerWidth - this.element.offsetWidth);
    }
}

