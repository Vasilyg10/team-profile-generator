const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const createdEmployees = [];

const menuQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Please provide Team Member name.'
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please provide Team Member id'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide Team Member email address.'
    },
    {
        type: 'list',
        name: 'role',
        choices: ['Manager', 'Intern', 'Engineer'],
        message: 'Please select the employees role.'
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) return console.log(err)
        console.log('Succesfully wrote file!')
    })
}

function init() {
    inquirer
        .prompt(menuQuestions)
        .then(answers => {
        
            if(answers.role === 'Manager') {
               inquirer.prompt([{
                    type: 'input',
                    name: 'test',
                    message: 'Youve reached the next stage of questioning'
               }]).then(object => {
                    const fakeManager = {name: 'boss', id: 5, email: 'test@test.com' }
                    createdEmployees.push(fakeManager)
                    console.log('CREATED EMPLOYEES -> ', createdEmployees)
                })

            } else if( answers.role === 'Intern') {
                //do intenrny stuff
            } else {
                //engineery things
            }

        })
}

init()