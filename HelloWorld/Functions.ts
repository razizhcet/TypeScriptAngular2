//function greet(firstName : string, lastName? : string) : void {
function greet(firstName : string, lastName : string = "Ahmad") : void {
    console.log("Hello, " + firstName + " " + lastName);
}

greet("Razi", "other");