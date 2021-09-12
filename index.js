const inquirer = require('inquirer');
const Engineer = require('./roles');
const Intern = require('./roles');
const Manager = require('./roles');

var empHolder = {
    name: "",
    id: "",
    email: "",
    github: "",
    school: "",
    officeNumber: "",
}



function nameIdEmail() {
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
                    //call function for manager info
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