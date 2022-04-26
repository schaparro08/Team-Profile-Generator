const Employee = require('./Employee');



class Intern extends Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeSchool) {
        super(employeeName, employeeId, employeeEmail);
        this.employeeSchool = employeeSchool;
    }
    getRole() {
        return 'Intern'
    }
    getEmployeeSchool() {
        return this.employeeSchool
    }
}

module.exports = Intern;

