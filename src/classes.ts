abstract class Department {
  static fiscalYear = 2022
    protected employees: string[] = []

    constructor(protected readonly id: string, private name: string) {
    }

    abstract describe(this: Department): void 

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

    describe() {
      console.log(`IT department - id: ${this.id}`)
    }
}
  
class AccountingDepartment extends Department {
    private lastReport: string
    private static instance: AccountingDepartment

    private constructor(id: string, private reports: string[]) {
      super(id, 'Accounting')
      this.lastReport = reports[0]
    }

    static getInstance() {
      return AccountingDepartment.instance ?? (AccountingDepartment.instance = new AccountingDepartment('d2', []))
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

    describe() {
      console.log(`Accounting department - id: ${this.id}`)
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

const accounting = AccountingDepartment.getInstance()
const accounting2 = AccountingDepartment.getInstance()
console.log(accounting === accounting2)

accounting.addReport('Something went wrong...')
accounting.addReport('Another thing went wrong...')
accounting.mostRecentReport = 'Adding a curve ball...'

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.printReports()
accounting.printEmployeeInformation()
accounting.describe()

console.log(accounting.mostRecentReport)