let inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');

const teamMember = [
    {
        type: 'input',
        name: 'name',
        message: 'Please provide Team Members name.'
    }
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) return console.log(err)
        console.log('Succesfully wrote file!')
    })
}

