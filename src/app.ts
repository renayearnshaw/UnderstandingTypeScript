class Department {
    name: string

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
// We would get a compile error because the describe method is not being called
// on an instance of type Department - so we must add a name property
accountingCopy.describe()