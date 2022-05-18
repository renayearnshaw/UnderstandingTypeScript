class Department {
    private employees: string[] = []

    // Use constructor shorthand to create and assign class properties
    // from constructor params by adding access modifiers.
    // These are called 'Parameter Properties'.
    // We also mark the id as a readonly property - it cannot be 
    // changed after initialisation
    constructor(private readonly id: string, private name: string) {
    }

    // 'this' should always refer to an instance of type Department
    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployee(employee: string) {
        // This will error: Cannot assign to 'id' because it is a read-only property
        // this.id = 'a33'
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    constructor(id: string) {
        super(id, 'IT')
    }
}

const accounting = new ITDepartment('a54')

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.describe()
accounting.printEmployeeInformation();

const accountingCopy = { name: 'New Department',  describe: accounting.describe }