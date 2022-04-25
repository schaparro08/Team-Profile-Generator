const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');






inquirer
 .prompt ([
    {
        type: 'list',
        message: 'What kind of employee are you trying to add?',
        name: 'employeeType',
        choices: ['Manager', 'Engneer', 'Intern']
      },
      {
        type: 'input',
        message: 'What is the employee name?',
        name: 'employeeName',
      },
      {
        type: 'input',
        message: 'What is their ID number?',
        name: 'employeeId',
      },
      {
        type: 'input',
        message: 'What is their email?',
        name: 'employeeEmail',
        
      },
      {
        type: 'input',
        message: 'What is their GitHub username?',
        name: 'employeeGithub',
        when(responses) {
            return responses.employeeType === 'Engineer';
        }
        
      },
      {
        type: 'input',
        message: 'What is their office number?',
        name: 'employeeOffice',
        when(responses) {
            return responses.employeeType === 'Manager';
        }
        
      },
      {
        type: 'input',
        message: 'What school do they attend?',
        name: 'employeeSchool',
        when(responses) {
            return responses.employeeType === 'Intern';
        }
        
      },
      {
        type: 'confirm',
        message: 'Would you like to add another employee?',
        name: 'employeeNew',
        
      },
      
])