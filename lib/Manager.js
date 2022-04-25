const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, employeeOffice) {
        super(name, id, email);
        this.employeeOffice = employeeOffice;
    }
}

module.exports = Manager;