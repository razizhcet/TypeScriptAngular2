abstract class Animal {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    walk(distance: number){
        console.log("Hi, my name is " + this.name + " and I'm walking " + distance + " meter");
    }
}

// let myAnimal = new Animal("Topper");
// myAnimal.walk(100);

class Snake extends Animal{
    constructor(theName: string){
        super(theName);
    }

    walk(distance:number){
        console.log("Snake don't really walk");
        
    }
}