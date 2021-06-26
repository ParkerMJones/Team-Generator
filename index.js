const inquirer = require('inquirer');
const fs = require('fs');
const style = require('./src:/style');
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
            type: 'number',
            name: 'managerID',
            message: "What is the Manager's ID?"
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

        .then(data => {
            const teamName = data.teamName;
            teamArray.push(teamName);
            const name = data.managerName;
            const id = data.managerID;
            const email = data.managerEmail;
            const officeNumber = data.officeNumber;
            const teamMember = new Manager(name, id, email, officeNumber);
            teamArray.push(teamMember);
            addEmployee();
        })
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

        .then(data => {
            switch (data.addEmployee) {
                case 'Engineer':
                    addEngineer();
                    break;

                case 'Intern':
                    addIntern();
                    break;
                
                case 'Done':
                    generatePage();
                    break;
            }
        })
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
            message: 'Employee Github Page: github.com/'
        }
    ])

        .then(data => {
            const name = data.engineerName;
            const id = data.id;
            const email = data.email;
            const github = data.github;
            const teamMember = new Engineer(name, id, email, github);
            teamArray.push(teamMember);
            addEmployee();
        })
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

        .then(data => {
            const name = data.name;
            const id = data.id;
            const email = data.email;
            const school = data.school;
            const teamMember = new Intern(name, id, email, school);
            teamArray.push(teamMember);
            addEmployee();
        })
}


function generatePage() {
    const pageArray = [];
    const pageBegin = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${teamArray[0]}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" />
    <style>
        ${style}
    </style>
</head>
<body>
    <div class="container-fluid d-flex" id="header">
        <h1 class="column-md-12">${teamArray[0]}</h1>
    </div>

    <div class="container" id="top-row">
        <div class="row justify-content-around">
        <div class="card col-lg-2 shadow" style="background-color: #D2D2CF">
                <div class="card-body" style="background-color: dodgerblue; color: white">
                    <h5 class="card-title">${teamArray[1].name}</h5>
                    <p class="card-text"><i class="fas fa-mug-hot"></i> Manager</p>
                </div>
                <ul class="list-group">
                    <li class="list-group-item">ID: ${teamArray[1].id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamArray[1].email}">${teamArray[1].email}</a></li>
                    <li class="list-group-item">Office #: ${teamArray[1].officeNumber}</li>
                </ul>
            </div>
    `
   pageArray.push(pageBegin)

    for (i=2; i < teamArray.length; i++) {
        if (teamArray[i].github) {
    const pageMember = 
             `<div class="card col-lg-2 shadow" style="background-color: #D2D2CF">
            <div class="card-body" style="background-color: dodgerblue; color: white">
                <h5 class="card-title">${teamArray[i].name}</h5>
                <p class="card-text"><i class="fas fa-laptop-code"></i> Engineer</p>
            </div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${teamArray[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                <li class="list-group-item">Github: <a href="https://github.com/${teamArray[i].github}" target="_blank">github.com/${teamArray[i].github}</a></li>
            </ul>
        </div>`

    pageArray.push(pageMember);
        } else if (teamArray[i].school) {
        
    const pageMember = 
             `<div class="card col-lg-2 shadow" style="background-color: #D2D2CF">
            <div class="card-body" style="background-color: dodgerblue; color: white">
                <h5 class="card-title">${teamArray[i].name}</h5>
                <p class="card-text"><i class="fas fa-graduation-cap"></i> Intern</p>
            </div>
            <ul class="list-group">
                <li class="list-group-item">ID: ${teamArray[i].id}</li>
                <li class="list-group-item">Email: <a href="mailto:${teamArray[i].email}">${teamArray[i].email}</a></li>
                <li class="list-group-item">School: ${teamArray[i].school}</li>
            </ul>
        </div>
            `

    pageArray.push(pageMember)
        }
    }
    const pageEnd = 
       `</div>
    </div>

</body>
</html>
`
pageArray.push(pageEnd)
;

fs.writeFile(`./dist:/index.html`, pageArray.join(""), function (err) {
    if (err) throw err;
})
};

addManager();