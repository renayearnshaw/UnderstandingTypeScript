class Department {
  static fiscalYear = 2022
    protected employees: string[] = []

    constructor(private readonly id: string, private name: string) {
    }

    describe(this: Department) {
        console.log(`Department (${this.id}): ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string[]

    constructor(id: string, admins: string[]) {
      super(id, 'IT')
      this.admins = admins
    }
}
  
class AccountingDepartment extends Department {
    private lastReport: string

    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting')
      this.lastReport = reports[0]
    }
  
    get mostRecentReport() {
      return this.lastReport
    }

    set mostRecentReport(report: string) {
      if (!report) {
        throw new Error('Report must be a valid value')
      } 
      this.addReport(report)
    }

    addEmployee(name: string) {
      if (name === 'Max') {
        // Max is not suitable for the job
        return
      }
      this.employees.push(name)
    }
  
    addReport(text: string) {
      this.reports.push(text)
      this.lastReport = text
    }
  
    printReports() {
      console.log(this.reports)
    }
}
  
const it = new ITDepartment('d1', ['Max'])

console.log(Department.fiscalYear)
it.addEmployee('Max')
it.addEmployee('Manu')

it.describe()
it.printEmployeeInformation()

const accounting = new AccountingDepartment('d2', [])

accounting.addReport('Something went wrong...')
accounting.addReport('Another thing went wrong...')
accounting.mostRecentReport = 'Adding a curve ball...'

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.printReports()
accounting.printEmployeeInformation()

console.log(accounting.mostRecentReport)