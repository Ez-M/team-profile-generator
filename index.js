const fs = require('fs');
const inquirer = require('inquirer');
const { htmlTempFirst } = require('./writeOut');
const { htmlTempLast } = require('./writeOut');
const {htmlTempSecond} = require('./writeOut');
// const role = require('./roles');
const { Engineer } = require('./roles');
const { Intern } = require('./roles');
const { Manager } = require('./roles');
var tempGit = ""
var numEmp = 0
var arrayHolder = []
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
                    queryIntern()
                    break;
                case "Engineer":
                    queryEngineer()
                    break;
            }
        }

        );
}


//each of these three functions 
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
            arrayHolder.push(current);
            console.log(arrayHolder);
            con()
            // updateOut(current);


        })
}

function queryIntern() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is this Intern's school?",
            name: 'school',
        }
    ])
        .then((response) => {
            empHolder.school = response.school;
            let current = new Intern(empHolder.name, empHolder.id, empHolder.email, empHolder.school);
            arrayHolder.push(current);
            console.log(arrayHolder);
            con()
            // updateOut(current);


        })
}

function queryEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is this Engineer's github username?",
            name: 'github',
        }
    ])
        .then((response) => {
            empHolder.github = response.github;
            let current = new Engineer(empHolder.name, empHolder.id, empHolder.email, empHolder.github);
            arrayHolder.push(current);
            console.log(arrayHolder);
            con()
            // updateOut(current);


        })
}






// depricated, used currently for reference
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
            fs.writeFile(`./output/output.json`, JSON.stringify(workingJson, null, 4),
                (writeErr) =>
                    writeErr
                        ? console.error(writeErr)
                        : console.info('updated team roster!')
            );
        }
    });
}


//prompts the user if they'd like to add an additional member to the team
function con() {
    inquirer.prompt([
        {
            type: 'list',
            message: "Would you like to add another member to the team?",
            name: 'continue',
            choices: ["Yes, I'd like to add another character", "No, finalize my team!"]
        }
    ])
        .then((response) => {
            if (response.continue == "Yes, I'd like to add another character") {
                init()
            } else { finish() }

        })
}

//Called to take team name and use it for file names
function finish() {
    inquirer.prompt([
        {
            type: 'input',
            message: "What is your team's name?",
            name: "teamName"
        }
    ])//verifies team name is entered else loops finish again
        .then((response) => {
            if (response.teamName) {
                fs.writeFile(`./output/output.html`, htmlTempFirst,
                    (writeErr) =>
                        writeErr
                            ? console.error(writeErr)
                            : console.info('updated team roster!')
                );
                fs.appendFile(`./output/output.html`, response.teamName,
                    (writeErr) =>
                        writeErr
                            ? console.error(writeErr)
                            : console.info('updated team roster!')
                );
                fs.appendFile(`./output/output.html`, htmlTempSecond,
                (writeErr) =>
                    writeErr
                        ? console.error(writeErr)
                        : console.info('updated team roster!')
            );
                
                arrayHolder.forEach(item => {
                    if(item.github.length>0){tempGit =`<a href ="${item.github}">${item.github}</a>` } else {tempGit = ""}

                    fs.appendFile(`./output/output.html`, `
                <div class="card col-3">
                <div class="col-12 bg-primary">Name</div>
                <div class="col-12">${item.role} ${item.id}</div>
                <div class="col-12"><a href ="mailto:${item.email}">${item.email}</a></div>
                <div class="col-12">${tempGit}${item.officeNumber}${item.school}</div>
                </div>`,
                        (writeErr) =>
                            writeErr
                                ? console.error(writeErr)
                                : console.info('Filling out roster...'))

                });
                fs.appendFile(`./output/output.html`, htmlTempLast,
                    (writeErr) =>
                        writeErr
                            ? console.error(writeErr)
                            : console.info('updated team roster!')
                );
                // writeOut.finalOut(response)
            }
            else {
                console.log("Team name is required!")
                finish()
            }

        })
    return
}
init()