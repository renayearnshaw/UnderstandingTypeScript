// types are assigned to the parameters
function add(n1: number, n2: number) {
    return n1 + n2
}

// types are inferred from the values used in the assignments
const number1 = 5
const number2 = 2.5

const result = add(number1, number2)
console.log(`Result is: ${result}`)

