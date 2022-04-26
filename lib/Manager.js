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

const generateManager = () =>
`<div class="card-body">
<h5 class="card-title">Name:${employeeName}</h5>
<p class="card-text">Position Title:</p>
</div>
<ul class="list-group list-group-flush p-2">
<li class="list-group-item">ID:${employeeId}</li>
<li class="list-group-item">Email:${employeeEmail}</li>
<li class="list-group-item">${employeeOffice}</li>
</ul>
</div>`


module.exports = Manager;
module.exports = generateManager;