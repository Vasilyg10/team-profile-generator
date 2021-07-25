const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const htmlTemplate = require('./src/htmlTemplate');

let createdEmployees = [];

const engineerQuestions = [
    {
        type: 'input',
        name: 'nameEngineer',
        message: "Please provide Engineer's name."
    },
    {
        type: 'input',
        name: 'idEngineer',
        message: "Please provide Engineer's id."
    },
    {
        type: 'input',
        name: 'emailEngineer',
        message: "Please provide Engineer's email address."
    },
    {
        type: 'input',
        name: 'githubEngineer',
        message: "Please provide Engineer's github username."
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'nameIntern',
        message: "Please provide Intern's name."
    },
    {
        type: 'input',
        name: 'idIntern',
        message: "Please provide Intern's id."
    },
    {
        type: 'input',
        name: 'emailIntern',
        message: "Please provide Intern's email address."
    },
    {
        type: 'input',
        name: 'schoolIntern',
        message: "Please provide Intern's School."
    }
];

const managerQuestions = [
    {
        type: 'input',
        name: 'nameManager',
        message: "Please provide Manager's name."
    },
    {
        type: 'input',
        name: 'idManager',
        message: "Please provide Manager's id."
    },
    {
        type: 'input',
        name: 'emailManager',
        message: "Please provide Manager's email address."
    },
    {
        type: 'input',
        name: 'officeNumberManager',
        message: "Please provide Manager's office number."
    }
];

function managerInit() {
    return inquirer
        .prompt(managerQuestions)
        .then(answers => {
            manager = new Manager(answers.nameManager, answers.idManager, answers.emailManager, answers.officeNumberManager);
            createdEmployees.push(manager);
            return createdEmployees;
        });
};

function nextEmployee() {
    return inquirer
        .prompt([
            {
                type: 'list',
                name: 'addNextEmployee',
                message: 'Would you like to add another Engineer, Intern, or End?',
                choices: ['Engineer', 'Intern', 'End']
            }
        ])
        .then(answers => {
            switch (answers.addNextEmployee) {
                case 'Engineer':
                    engineerInit().then(nextEmployee);
                    break;
                case 'Intern':
                    internInit().then(nextEmployee);
                    break;
                case 'End':
                    let data = htmlTemplate(createdEmployees);
                    write(data);
                    break;
            }
        })
};

function engineerInit() {
    return inquirer
        .prompt(engineerQuestions)
        .then(answers => {
            engineer = new Engineer(answers.nameEngineer, answers.idEngineer, answers.emailEngineer, answers.githubEngineer);
            createdEmployees.push(engineer);
            return createdEmployees;
        });
};

function internInit() {
    return inquirer
        .prompt(internQuestions)
        .then(answers => {
            intern = new Intern(answers.nameIntern, answers.idIntern, answers.emailIntern, answers.schoolIntern);
            createdEmployees.push(intern);
            return createdEmployees;
        });
};

const write = content => {
    fs.writeFile('./dist/index.html', content, function(err) {
        if (err) return console.log(err)
        console.log('Succesfully wrote file!')
    })
}

managerInit()
    .then(nextEmployee)