// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');

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
        {
            type: 'confirm',
            name: 'team',
            message: 'Would you like to add a team member?',
        },
        {
            type: 'list',
            name: 'options',
            message: 'Please select one.',
            choices: ['Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter GitHub username.',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter name of school.',
        },
    ])  
// Answers are written to index.html with arrow function and message is rendered with console.log
      .then((answers) => {
        const htmlPageContent = generateHTML(answers);
        fs.writeFile('dist/index.html', htmlPageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html.')
        );
    });
}

// Function call to initialize app
init();