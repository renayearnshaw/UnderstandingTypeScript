// create a function type as a custom type
type AddFn =  (a: number, b: number) => number

let addFn: AddFn

addFn = (n1: number, n2: number) => {
    return n1 + n2
}

interface Named {
    readonly name: string
}

interface Greetable extends Named {
    greet(phrase: string): void
}

class Person implements Greetable {
    constructor(readonly name: string, private age: number) {
    }

    greet(phrase: string) {
        console.log(`${phrase} ${this.name} and I'm ${this.age}`)
    }
}

let user1: Greetable

user1 = new Person('Renay', 21)
// won't compile
// user1.name = 'Phil'

user1.greet("Hello, I'm")
console.log(user1)