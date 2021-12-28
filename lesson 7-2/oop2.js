// Абстрактный класс
class Transport {
    constructor(type, name, model) {
        this.type = type;
        this.name = name;
        this.model = model;
    }

    break(){
        console.log(`break ON ${this.name}`)
    }
}

class Car extends Transport {
    constructor(type, name, model, engine) {
        super(type, name, model);

        this.engine = engine;
    }
}

const bmw = new Car("Car", "BMW", "e38", "v12 5.4");
console.log(bmw)
bmw.break()



// солид каждая буква одна концепция