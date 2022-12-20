// TODO: Include packages needed for this application
const inquire = require('inquirer');
const md = require('./utils/generateMarkdown.js');
const file = require('fs');
console.log(md);
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description',
    },
    { type: 'input', name: 'install', message: 'Enter an installation guide' },
    { type: 'input', name: 'info', message: 'Enter some usage information' },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Enter some guidelines for contributions',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Enter some intstructions for testing',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'ISC', 'GNU', 'APACHE', 'None'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let title = md.genMD(data);
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('README.md', answers);
    });
}

// Function call to initialize app
init();
