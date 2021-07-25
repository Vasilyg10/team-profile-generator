const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const createdEmployees = require('../index');

const createEngineer = createdEmployees => {
    for (let i=0; i < createdEmployees.length; i++) {
        if (createdEmployees[i].role === 'Engineer') {
            const engineer = new Engineer(createdEmployees[i].name, createdEmployees[i].id, createdEmployees[i].email, createdEmployees[i].github);
            return `
                <div class="card">
                    <div class="">
                        <h2 class="content">${engineer.getName()}</h2>
                        <h2 class="content">${engineer.getRole()}</h2>
                    </div>
                    <ul class="card-content">
                        <li class="content">ID: ${engineer.getId()}</li>
                        <li class="content"><a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a></li>
                        <li class="content"><a href="http://github.com/${engineer.getGithub()}" target="_blank">Github: ${engineer.getGithub()}</a></li>
                    </ul>
                </div>
            `
        }
    }
}

const createIntern = createdEmployees => {
    for (let i=0; i < createdEmployees.length; i++) {
        if (createdEmployees[i].role === 'Intern') {
            const intern = new Intern(createdEmployees[i].name, createdEmployees[i].id, createdEmployees[i].email, createdEmployees[i].school);
            return `
                <div class="card">
                    <div class="">
                        <h2 class="content">${intern.getName()}</h2>
                        <h2 class="content">${intern.getRole()}</h2>
                    </div>
                    <ul class="card-content">
                        <li class="content">ID: ${intern.getId()}</li>
                        <li class="content"><a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a></li>
                        <li class="content">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
            `
        }
    }
}

const createManager = createdEmployees => {
    for (let i=0; i < createdEmployees.length; i++) {
        if (createdEmployees[i].role === 'Manager') {
            const manager = new Manager(createdEmployees[i].name, createdEmployees[i].id, createdEmployees[i].email, createdEmployees[i].officeNumber);
            return `
                <div class="card">
                    <div class="">
                        <h2 class="content">${manager.getName()}</h2>
                        <h2 class="content">${manager.getRole()}</h2>
                    </div>
                    <ul class="card-content">
                        <li class="content">ID: ${manager.getId()}</li>
                        <li class="content"><a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a></li>
                        <li class="content">Office Number: ${manager.getOfficeNumber()}</li>
                    </ul>
                </div>
            `
        }
    }
}

module.exports = createdEmployees => {
    return `
    <!DOCTYPE html>

    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Members</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    </head>
    
    <body>
        <div class="primary">
            <div class="card-header-title is-centered">
                <h1 class="">Team Members</h1>
            </div>
        </div>
        <div class="primary">
            <div class="columns">
                <div class="column">
                    ${createEngineer(createdEmployees)}
                </div>
                <div class="column">
                    ${createIntern(createdEmployees)}
                </div>
                <div class="column">
                    ${createManager(createdEmployees)}
                </div>
            </div>
        </div>
    </body>

    </html>
    `
}