export class OtherCar {
    container(container, otherCarClass){
        this.container = container;
        this.otherCarClass = otherCarClass;
        this.element = document.createElement('div');
    }
    
    init(){
        this.#setCar();
    }
    
    #setCar(){
        this.element.className.add('other-car');
    }

    #randomDrivingCarPosition(){
        return Math.floor(Math.random() * this.container.innerWidth - this.element.offsetWidth);
    }
}

