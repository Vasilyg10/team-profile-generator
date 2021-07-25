const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const createdEmployees = require('../index');

const createEngineer = createdEmployees => {
    for (let i=0; i < createdEmployees.length; i++) {
        if (createdEmployees[i].role === 'Engineer') {
            const engineer = new Engineer(createdEmployees[i].name, createdEmployees[i].id, createdEmployees[i].email, createdEmployees[i].github);
            return `
                <div class="">
                    <div class="">
                        <h2 class="">${engineer.getName()}</h2>
                        <h2 class="">${engineer.getRole()}</h2>
                    </div>
                    <ul class="">
                        <li class="">ID: ${engineer.getId()}</li>
                        <li class=""><a href="mailto:${engineer.getEmail()}">Email: ${engineer.getEmail()}</a</li>
                        <li class="">Github: ${engineer.getGithub()}</li>
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
                <div class="">
                    <div class="">
                        <h2 class="">${intern.getName()}</h2>
                        <h2 class="">${intern.getRole()}</h2>
                    </div>
                    <ul class="">
                        <li class="">ID: ${intern.getId()}</li>
                        <li class=""><a href="mailto:${intern.getEmail()}">Email: ${intern.getEmail()}</a</li>
                        <li class="">School: ${intern.getSchool()}</li>
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
                <div class="">
                    <div class="">
                        <h2 class="">${manager.getName()}</h2>
                        <h2 class="">${manager.getRole()}</h2>
                    </div>
                    <ul class="">
                        <li class="">ID: ${manager.getId()}</li>
                        <li class=""><a href="mailto:${manager.getEmail()}">Email: ${manager.getEmail()}</a</li>
                        <li class="">Office Number: ${manager.getOfficeNumber()}</li>
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
    </head>
    
    <body>
        <div class="">
            <div class="">
                <h1 class="">Team Members</h1>
            </div>
        </div>
        <div class="">
            <div class="">
                <div class="">
                    ${createEngineer(createdEmployees)}
                </div>
                <div class="">
                    ${createIntern(createdEmployees)}
                </div>
                <div class="">
                    ${createManager(createdEmployees)}
                </div>
            </div>
        </div>
    </body>

    </html>
    `
}