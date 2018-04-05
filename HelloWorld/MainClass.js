var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.walk = function (distance) {
        console.log("Hi, my name is " + this.name + " and I'm walking " + distance + "meter");
    };
    return Animal;
}());
var myAnimal = new Animal("Topper");
myAnimal.walk(100);
