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
            type: 'list',
            name: 'options',
            message: 'Would you like to add a team member? Please select an option.',
            choices: ['Engineer', 'Intern', 'None'],
        },
        // {
        //     type: 'input',
        //     name: 'github',
        //     message: 'What is your GitHub username?',
        // },
        // {
        //     type: 'input',
        //     name: 'tests',
        //     message: 'What command should be run to run tests?',
        // },
        // {
        //     type: 'input',
        //     name: 'usage',
        //     message: 'What does the user need to know about using the repo?',
        // },
        // {
        //     type: 'input',
        //     name: 'contributing',
        //     message: 'What does the user need to know about contributing to the repo?',
        // },
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