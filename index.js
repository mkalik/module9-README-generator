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
        default: 'none',
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
        default: 'none',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a project description:',
        default: 'none',
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter required installations:',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'info',
        message: 'Enter some usage information:',
        default: 'none',
    },
    {
        type: 'input',
        name: 'rules',
        message: 'Enter some rules for contributions:',
        default: 'none',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Enter some instructions for testing:',
        default: 'node index.js',
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
    let readme = `${title}\n${md.renBadge(data.license)}\n## Description:\n${
        data.description
    }\n## 1.Installation:\n${data.install}\n## 2.Usage:\n${
        data.usage
    }\n## 3.Credits:\n${data.username} | ${
        data.email
    }\n## 4.License:\n${md.renLink(data.license)}\n## 5.How to contribute:\n${
        data.rules
    }\n## 6.Tests:\n${data.instructions}`;
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
