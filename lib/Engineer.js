const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, employeeGithub) {
        super(name, id, email);
        this.employeeGithub = employeeGithub;
    }
}

module.exports = Engineer;