const inquirer = require('inquirer')

class Employee {
	constructor (name, id, email){
	this.name = name;
	this.id = id;
	this.email = email;	
}

	getName()  {return this.name}
	getId ()   {return this.id}
	getEmail() {return this.email}
	getRole()  {return this}
}


	class Engineer extends Employee {
		constructor (github) {
		this.github = github;

		super(this.name, id, email)}
		getGithub() {return this.github}

}

	class Intern extends Employee {
		constructor (school) {
		this.school = data.school 

		super(name, id, email)}
		getSchool() {this.school}
}
	class Manager extends Employee {
		constructor (officeNumber){
		this.officeNumber = data.officeNumber

		super(name, id, email)}
		getOfficeNumber() {this.officeNumber}
}


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