const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(employeeName, employeeId, employeeEmail, employeeGithub) {
        super(employeeName, employeeId, employeeEmail);
        this.employeeGithub = employeeGithub;
    }
    getRole() {
        return 'Engineer'
    }
    getEmployeeGithub() {
        return this.employeeGithub
    }
}


const generateEngineer = () =>
`<div class="card-body">
<h5 class="card-title">Name:${employeeName}</h5>
<p class="card-text">Position Title:</p>
</div>
<ul class="list-group list-group-flush p-2">
<li class="list-group-item">ID:${employeeId}</li>
<li class="list-group-item">Email:${employeeEmail}</li>
<li class="list-group-item">${employeeGithub}</li>
</ul>
</div>`




module.exports = Engineer;
module.exports = generateEngineer;

