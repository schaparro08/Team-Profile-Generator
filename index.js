const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

const generateTeam = () =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" 
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>Document</title>
</head>
<body>
    <header class="container-fluid text-center text-white p-2 weather-header h-150px" style="background-color: #6998AB;">
        <h1 style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-weight: bolder;">My Team</h1>
    </header>
    <main>
        <div class="container">
            <div class="row">
                <div class="team-area col-12 d-flex justify-content-center mt-5">
                   ${Employee}
                </div>
            </div>

        </div>
    </main>
    <script src="../index.js"></script> 
</body>
</html>`



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
.then((responses) => {
  const promptContent = generateTeam(responses);

  fs.writeFile('../dist/index.html', promptContent, (err) =>
  err ? console.log(err) : console.log('Successfully created index.html!')
  );
});