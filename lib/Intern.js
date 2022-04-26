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

const generateIntern = () =>
`<div class="card-body">
<h5 class="card-title">Name:${employeeName}</h5>
<p class="card-text">Position Title:</p>
</div>
<ul class="list-group list-group-flush p-2">
<li class="list-group-item">ID:${employeeId}</li>
<li class="list-group-item">Email:${employeeEmail}</li>
<li class="list-group-item">${employeeSchool}</li>
</ul>
</div>`

module.exports = Intern;
module.exports = generateIntern;

