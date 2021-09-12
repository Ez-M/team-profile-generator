const inquirer = require('inquirer');
const roles = require('./roles');




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
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already '+response.username+'?!')
  );