// TODO: Include packages needed for this application
const inquire = require('inquirer');
const md = require('./utils/generateMarkdown.js');
const file = require('fs');
console.log(md);
// TODO: Create an array of questions for user input
// order of questions isnt that important
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your github user name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        default: 'none@nothing.com',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        default: '',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter an installation guide',
        default: 'npm i',
    },
    { type: 'input', name: 'info', message: 'Enter some usage information' },
    {
        type: 'input',
        name: 'guidelines',
        message: 'Enter some guidelines for contributions',
        default: 'none',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Enter some intstructions for testing',
        default: 'node index.js',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['MIT', 'ISC', 'GNU', 'APACHE', 'None'],
        default: 'none',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    let title = md.genMD(data);
    let readme = `
    ${title} ${md.renBadge(data.license)}
    
    ## Description:

    ${data.description}

    ## 1.Installation:

    ${data.installation}

    ## 2.Usage:

    ${data.usage}

    ## 3.Credits:

    ${data.username}

    ## 4.License:

    ${md.renLink(data.license)}

    ## 5.How to contribute:

    ${data.guidelines}

    ## 6.Tests:

    ${data.intructions}
    `;
    file.writeFile(fileName, readme, function (err) {
        console.log(err);
        if (err) {
            tryAgain();
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile('README.md', answers);
    });
}
function tryAgain() {
    inquire
        .prompt([
            {
                type: 'confirm',
                input: 'again',
                message:
                    'file couldnt be created, would you like to try again?',
            },
        ])
        .then((answer) => {
            if (answer.confirm == false) {
                return Promise.resolve();
            } else {
                init();
            }
        });
}
// Function call to initialize app
init();
