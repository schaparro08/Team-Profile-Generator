const Employee = require("./Employee");



class Intern extends Employee {
    constructor(name, id, email, employeeSchool) {
        super(name, id, email);
        this.employeeSchool = employeeSchool;
    }
}

module.exports = Intern;