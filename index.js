const inquirer = require('inquirer');

inquirer
.prompt([
    {
        type: 'input',
        message: 'What is the employee name?',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is the employee id?',
        name: 'id',
    },
    {
        type: 'input',
        message: 'What is the employee email?',
        name: 'email',
    },
    {
        type: 'list',
    message: 'What role does the employee fill?',
    name: 'role',
    choices:['Manager', 'Engineer', 'Intern']
}
])

class Employee{
    constructor (name, id, email,){
        this.name = name;
        this.id= id;
        this.email = email;
    }
}