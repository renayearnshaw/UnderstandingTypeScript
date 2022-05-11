class Department {
    name: string

    constructor(name: string) {
        this.name = name
    }

    describe() {
        console.log(`Department is called ${this.name}`)
    }
}

const accounting = new Department('accounting')

accounting.describe()

const accountingCopy = { describe: accounting.describe }
// This will print 'Department is called undefined' because the calling object -
// accountingCopy - doesn't have a name property
accountingCopy.describe()