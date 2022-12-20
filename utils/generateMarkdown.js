// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const osource = {
    MIT: {
        badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
        info: 'MIT License',
        link: 'https://opensource.org/licenses/MIT',
    },
    ISC: {
        badge: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
        info: 'null',
        link: 'https://opensource.org/licenses/ISC',
    },
    GNU: {
        badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
        info: 'null',
        link: 'https://www.gnu.org/licenses/gpl-3.0',
    },
    APACHE: {
        badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
        info: 'null',
        link: 'https://opensource.org/licenses/Apache-2.0',
    },
};
function renderLicenseBadge(license) {
    return license == 'None' ? '' : osource.license.badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return license == 'None' ? '' : osource.license.link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    return license == 'None' ? '' : osource.license.info;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    console.log('helo');
    return `# ${data.title}

`;
}

module.exports = {
    genMD: generateMarkdown,
    renBadge: renderLicenseBadge,
    renLink: renderLicenseLink,
    renSec: renderLicenseSection,
};

// module.exports = generateMarkdown;
