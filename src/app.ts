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
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'IT')
        // Any assignments to this must be done after the super has been called.
        // We could use a parameter property here and it would achieve the same thing.
        this.admins = admins
    }
}

const it = new ITDepartment('a54', ['Max'])

it.addEmployee('Max');
it.addEmployee('Manu');

it.describe()
it.printEmployeeInformation();

console.log(it)