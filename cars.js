function Car(name, wheels) {
    this.name = name;
    this.wheels = wheels;

    this.go = function () {
        console.log(this.name + " is moving");
    };

    this.playMusic = function () {
        console.log(this.name + " is playing music");
    };

    this.getName = function () {
        return this.name;
    };

    this.getWheels = function () {
        return this.wheels + " wheels";
    };
}

var BMW = new Car("BMW", "winter");
console.log("This is " + BMW.getName());
BMW.go();
BMW.playMusic();
console.log(BMW.getName() + " has " + BMW.getWheels());

var LadaKalina = new Car("LadaKalina", "summer");
console.log("This is " + LadaKalina.getName());
LadaKalina.go();
LadaKalina.playMusic();
console.log(LadaKalina.getName() + " has " + LadaKalina.getWheels());
