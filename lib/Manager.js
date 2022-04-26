const Employee = require('./Employee');

class Manager extends Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeOffice) {
        super(employeeName, employeeId, employeeEmail, );
        this.employeeOffice = employeeOffice;
    }
    getRole() {
        return 'Manager'
    }
    getEmployeeOffice() {
        return this.employeeOffice
    }
}

module.exports = Manager;