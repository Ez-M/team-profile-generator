class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() { return this.name }
    getId() { return this.id }
    getEmail() { return this.email }
    getRole() { return this }
}


class Engineer extends Employee {
    constructor(name, id, email, github) {
        this.github = github;
        super(name, id, email)
    }
    getGithub() { return this.github }

}

class Intern extends Employee {
    constructor(name, id, email, school) {
        this.school = school
        super(name, id, email)
    }
    getSchool() { this.school }
}
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        this.officeNumber = officeNumber
        super(name, id, email)
    }
    getOfficeNumber() { this.officeNumber }
}

module.exports = Employee
module.exports = Engineer
module.exports = Intern
module.exports = Manager