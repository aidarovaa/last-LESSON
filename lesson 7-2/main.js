class Transport {
    constructor(name, color, model, engine, number) {
        this.name = name;
        this.color = color;
        this.model = model;
        this.engine = engine;
        this.number = number;
    }
    startEngine(){
        console.log(`Engine on ${this.name} STARTED!`)
    }

    lightOn(){
        console.log(`Light ON! ${this.name`)
    }

    lightOff(){
        console.log(`Light OFF! ${this.name}`)
    }
}

const bmw = new Transport("BMW", "black", "e38", "v12 5.4", "555 BMW");
console.log(bmw);
bmw.startEngine();
bmw.lightOn()

const toyota = new Transport("TOYOTA", "white", "camry 75", "v6 3.5", "777 TOP");
console.log(toyota);
toyota.startEngine();
toyota.lightOff()