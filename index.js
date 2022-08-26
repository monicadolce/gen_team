// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
let employees = [];

// Function initializes app using inquirer
function init() {
    inquirer
// Array of question prompts for user to answer and one list of roles to choose from
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'number',
            message: 'What is your office number?',
        },

        
    ])  
// Answers are written to index.html with arrow function and message is rendered with console.log
      .then((answers) => {
       let newManager = new Manager (answers.name, answers.id, answers.email, answers.number)
       employees.push(newManager)
       menu()
    });
}

function menu() {
    return inquirer.prompt({
        type: 'list',
        name: 'options',
        message: 'Please select one.',
        choices: ['Engineer', 'Intern', 'Build Team'],
    }).then ((answers) => {
        if (answers.options === 'Engineer') {
            addEngineer();
        } else if (answers.options === 'Intern') {
            addIntern();
        } else {
            const htmlPageContent = generateHTML(employees);
            fs.writeFile('dist/index.html', htmlPageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created index.html.')
            );
        }
    })
    
}

function addEngineer() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter GitHub username.',
        },
    ]).then ((answers) => {
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employees.push(newEngineer)
        menu();
    })
}

function addIntern() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is your Id?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter name of school.',
        },
    
    ]).then ((answers) => {
        let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employees.push(newIntern)
        menu();
    })
}
// Function call to initialize app
init();