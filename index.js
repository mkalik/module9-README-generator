// TODO: Include packages needed for this application
const inquire = require('inquirer');
const md = require('./utils/generateMarkdown.js');
const file = require('fs');
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
        default: 'none',
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
        default: 'none',
    },
    {
        type: 'input',
        name: 'info',
        message: 'Enter some usage information:',
        default: 'none',
    },
    {
        type: 'confirm',
        name: 'video',
        message: 'would you like to link a video to demonstrate usage?',
    },
    {
        type: 'input',
        name: 'videoLink',
        message: 'Please add a video link:',
        when: (answers) => answers.video == true,
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
        default: 'none',
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
    let toc = `[description](#desc)
    \n[Installation](#1)
    \n[Usage](#2)
    \n[Credits](#3)
    \n[License](#4)
    \n[Contributing](#5)
    \n[Tests](#6)
    \n[Questions](#7)`;

    let ghLink =
        data.username == 'none'
            ? ''
            : `[github](https://github.com/${data.username})`;
    let usageSection = data.video
        ? `${data.info}\n[usage video](${data.videoLink})`
        : `${data.info}`;
    let readme = `${title}\n${md.renBadge(
        data.license
    )}\n## Table of Contents:\n${toc}
    \n# <a name='desc'></a>\n## 0.Description:\n${
        data.description
    }\n# <a name='1'></a>\n## 1.Installation:\n    ${
        data.install
    }\n# <a name='2'></a>\n## 2.Usage:\n${usageSection}\n# <a name='3'></a>\n## 3.Credits:\n${
        data.username
    } | ${data.email}\n# <a name='4'></a>\n## 4.License:\n${md.renLink(
        data.license
    )}\n# <a name='5'></a>\n## 5.How to contribute:\n${
        data.rules
    }\n# <a name='6'></a>\n## 6.Tests:\n${
        data.instructions
    }\n# <a name='7'></a>\n## 7.Questions:\nPlease contact me here ${ghLink}`;
    file.writeFile(fileName, readme, function (err) {
        if (err) {
            tryAgain();
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquire.prompt(questions).then((answers) => {
        // console.log(answers);
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
