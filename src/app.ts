class Department {
    private name: string

    constructor(name: string) {
        this.name = name
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
accountingCopy.describe()