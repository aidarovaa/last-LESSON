// Инкапсуляция - все что внутри, то что мы не видим

class Car {

    _speed = 0; // этот атрибут не используется вне этого класса

    constructor(name, model, maxSpeed, color, weight, speed) {
        this.name = name;
        this.model = model;
        this.maxSpeed = maxSpeed;
        this.color = color;
        this.weight = weight;
        this.speed = speed;
    }

    gas(){
        if(this._speed < this.maxSpeed){
             this._speed += this.speed;
              console.log(this._speed)
    }else{
        console.log("MAX SPEED! CHECK!")
        }
    }
}

const bmw = new Car("BMW", "E 38", 450, "BLACK", 2.5, 50);
console.log(bmw);
bmw.gas();
bmw.gas();z
bmw.gas();
bmw.gas();
bmw.gas();
bmw.gas();

const lexus = new Car("Lexus", "IS 250", 350, "WHITE", 1.5, 20);
console.log(lexus);
