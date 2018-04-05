class Greeter {
    firstName = "Razi";

    sayHello(){
        setTimeout(() => {
            console.log("Hello, " + this.firstName);
        }, 500);
    }
    
}

let greeter = new Greeter();
greeter.sayHello();