const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./roles');
const Intern = require('./roles');
const Manager = require('./roles');
var numEmp = 0
var empHolder = {
    name: "",
    id: "",
    email: "",
    github: "",
    school: "",
    officeNumber: "",
}



function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: "What is this team member's name?",
                name: 'name',
            },
            {
                type: 'input',
                message: "What is this team member's id number?",
                name: 'id',
            },
            {
                type: 'input',
                message: "What is this team member's email?",
                name: 'email',
            },
            {
                type: 'list',
                message: "What is this team member's role within the team?",
                name: 'role',
                choices: ['Manager', 'Intern', 'Engineer']

            },
        ])
        .then((response) => {
            empHolder.name = response.name;
            empHolder.id = response.id;
            empHolder.email = response.email;
            switch (response.role) {
                case "Manager":
                    queryManager()
                    break;
                case "Intern":
                    //call function for manager info
                    break;
                case "Engineer":
                    //call function for manager info
                    break;
            }
        }

        );
}



function queryManager() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is this Manager's office number?",
            name: 'officeNumber',
        }
    ])
        .then((response) => {
            empHolder.officeNumber = response.officeNumber;
            let current = new Manager(empHolder.name, empHolder.id, empHolder.email, empHolder.officeNumber);
            updateOut(current);


        })
}









function updateOut(current) {
    fs.readFile('./output/output.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
        } else {
            //convert string into JSON object
            var workingJson = JSON.parse(data);

            // adding current employee
            workingJson.push(current);

            // write updated reviews back to file
            fs.writeFile(
                './output/output.json',
                JSON.stringify(workingJson, null, 4),
                (writeErr) =>
                    writeErr
                        ? console.error(writeErr)
                        : console.info('updated team roster!')
            );
        }
    });
}




init()