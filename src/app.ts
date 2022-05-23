interface Greetable {
    name: string
    
    greet(phrase: string): void
}

class Person implements Greetable {
    constructor(public name: string, private age: number) {
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name} and I'm ${this.age}`)
    }
}

let user1: Greetable

user1 = new Person('Renay', 21)

user1.greet("Hello, I'm")
console.log(user1)