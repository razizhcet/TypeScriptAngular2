var Greeter = /** @class */ (function () {
    function Greeter() {
        this.firstName = "Razi";
    }
    Greeter.prototype.sayHello = function () {
        var _this = this;
        setTimeout(function () {
            console.log("Hello, " + _this.firstName);
        }, 500);
    };
    return Greeter;
}());
var greeter = new Greeter();
greeter.sayHello();
