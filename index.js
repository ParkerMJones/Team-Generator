const inquirer = require('inquirer');
const fs = require('fs');
const style = require('./src/style.js');
const Manager = require('./lib:/Manager');
const Engineer = require('./lib:/Engineer');
const Intern = require('./lib:/Intern');

let teamArray = [];

function addManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "Hello.  What is the name of your organization?",
            name: 'teamName',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name for your team");
                    return false;
                }
            }

        },
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the name of the Project Manager?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide a Project Manager.");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the Manager's email address?",
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log("Please enter an email address.")
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'officeNumber',
            message: "What is the Manager's office number?"
        }
    ])
}


function addEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Would you like to add another employee?',
            choices: ['Engineer', 'Intern', 'Done'],
        }
    ])
}

function addEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'Employee name: ',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please provide a name.");
                    return false;
                }
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'Employee ID: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Employee email address: '
        },
        {
            type: 'input',
            name: 'github',
            message: 'Employee Github Page: '
        }
    ])
}

function addIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Intern name: '
        },
        {
            type: 'number',
            name: 'id',
            message: 'Intern ID: '
        },
        {
            type: 'input',
            name: 'email',
            message: 'Intern email address: '
        },
        {
            type: 'input',
            name: 'school',
            message: 'School Attending: '
        }
    ])
}

function generatePage() {
    const page = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Generator</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <link rel="stylesheet" href="./style.css" />
</head>
<body>
    <div class="container-fluid d-flex" id="header">
        <h1 class="column-md-12">${addManager.teamName}</h1>
    </div>

    <div class="container" id="top-row">
        <div class="row justify-content-around">
        <div class="card col-lg-2 shadow" style="background-color: #D2D2CF">
                <div class="card-body" style="background-color: dodgerblue; color: white">
                    <h5 class="card-title">Michael</h5>
                    <p class="card-text"><i class="fas fa-mug-hot"></i> Manager</p>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">ID: </li>
                    <li class="list-group-item">Email: </li>
                    <li class="list-group-item">Office #: </li>
                </ul>
            </div>
    `
    for (i=1; i < teamArray.length; i++) {
        if (teamArray[i] = Engineer) {
            + `<div class="card col-lg-2 shadow" style="background-color: #D2D2CF">
            <div class="card-body" style="background-color: dodgerblue; color: white">
                <h5 class="card-title">${Engineer.name}</h5>
                <p class="card-text"><i class="fas fa-laptop-code"></i> Engineer</p>
            </div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${Engineer.id}</li>
                <li class="list-group-item">Email: ${Engineer.email}</li>
                <li class="list-group-item">Github: ${Engineer.github}</li>
            </ul>
        </div>`
        } else if (teamArray[i] = Intern) {
            + `<div class="card col-lg-2 shadow" style="background-color: #D2D2CF">
            <div class="card-body" style="background-color: dodgerblue; color: white">
                <h5 class="card-title">${Intern.name}</h5>
                <p class="card-text"><i class="fas fa-graduation-cap"></i> Intern</p>
            </div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${Intern.id}</li>
                <li class="list-group-item">Email: ${Intern.email}</li>
                <li class="list-group-item">School: ${Intern.school}</li>
            </ul>
        </div>
            `
        }
    }
    + `</div>
    </div>

</body>
</html>
`;
};