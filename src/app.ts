class Department {

    // Use constructor shorthand to create and assign class properties
    // from constructor params by adding access modifiers.
    // These are called 'Parameter Properties'
    constructor(private name: string) {
    }

    // 'this' should always refer to an instance of type Department
    describe(this: Department) {
        console.log(`Department is called ${this.name}`)
    }
}

const accounting = new Department('accounting')

accounting.describe()

const accountingCopy = { name: 'New Department',  describe: accounting.describe }
// We get a compile error now because the name property is private
// accountingCopy.describe()