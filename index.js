// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Import classes from other files
const generateHTML = require('./src/generateHTML');
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')

// Empty array collects answers to prompts
let employees = [];

// Function initializes app using inquirer
function init() {
    inquirer
        // Array of question prompts for Manager to answer
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
        // Answers to Manager prompts are collected and pushed into newManager 
        .then((answers) => {
            let newManager = new Manager(answers.name, answers.id, answers.email, answers.number)
            employees.push(newManager)
            // menu function is called to return to menu prompts
            menu()
        });
}

// Menu function renders options for the Manager to choose from in order to create a team
function menu() {
    return inquirer.prompt({
        type: 'list',
        name: 'options',
        message: 'Please select one.',
        choices: ['Engineer', 'Intern', 'Build Team'],
        // If Engineer is selected, then the addEngineer function will be initialized
    }).then((answers) => {
        if (answers.options === 'Engineer') {
            addEngineer();
            // If Intern is selected, then the addIntern function will be initialized
        } else if (answers.options === 'Intern') {
            addIntern();
        } else {
            // If Build Team is selected, then answers are inserted into generateHTML and index.html is created
            const htmlPageContent = generateHTML(employees);
            fs.writeFile('dist/index.html', htmlPageContent, (err) =>
                err ? console.log(err) : console.log('Successfully created index.html.')
            );
        }
    })

}
// addEngineer function renders specific prompts for Manager to answer in order to add Engineer to team
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
        // Answers to addEngineer prompts are collected and pushed into newEngineer 
    ]).then((answers) => {
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employees.push(newEngineer)
        // menu function is called to return to menu prompts
        menu();
    })
}

// addIntern function renders specific prompts for Manager to answer in order to add Intern to team
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

        // Answers to addIntern prompts are collected and pushed into newIntern
    ]).then((answers) => {
        let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employees.push(newIntern)
        // menu function is called to return to menu prompts
        menu();
    })
}
// Function call to initialize app
init();