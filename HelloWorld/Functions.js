//function greet(firstName : string, lastName? : string) : void {
function greet(firstName, lastName) {
    if (lastName === void 0) { lastName = "Ahmad"; }
    console.log("Hello, " + firstName + " " + lastName);
}
greet("Razi", "other");
