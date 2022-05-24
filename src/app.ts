// Create a function type using an interface.
// Interfaces are used to define the structure of an object,
// but functions ARE objects, and can thus also be defined with an interface
// type AddFn =  (a: number, b: number) => number
interface AddFn {
    // Creates an ANONYMOUSE function definiton.
    // Same as the greet method definiton below, but without a method name
    (a: number, b: number): number
}

let addFn: AddFn

addFn = (n1: number, n2: number) => {
    return n1 + n2
}

interface Named {
    // all properties are optional
    readonly name?: string
    outputName?: string
}

interface Greetable extends Named {
    greet(phrase: string): void
}

class Person implements Greetable {
    // name is optional - it might not be set in the constructor
    readonly name?: string

    constructor(name: string, private age: number) {
        if (name) {
            this.name = name
        }
    }

    greet(phrase: string) {
        if (this.name) {
            console.log(`${phrase} ${this.name} and I'm ${this.age}`)
        } else {
            console.log('Hi')
        }
    }
}

let user1: Greetable

user1 = new Person('', 21)
// won't compile
// user1.name = 'Phil'

user1.greet("Hello, I'm")
console.log(user1)