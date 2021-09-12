const inquirer = require('inquirer');
const roles = require('./roles');

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
                message: 'What is your user name?',
                name: 'name',
            },
            {
                type: 'input',
                message: 'What is your password?',
                name: 'id',
            },
            {
                type: 'input',
                message: 'Re-enter password to confirm:',
                name: 'email',
            },
        ])
        .then((response) => {
            empHolder.name = response.name;
            empHolder.id = response.id;
            empHolder.email = response.email;

        }

        );
}