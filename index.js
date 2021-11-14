const inquirer = require('inquirer');
const fs = require('fs');
// const Choices = require('inquirer/lib/objects/choices');
const userInfo = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'What is the name of your project?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Provide a short description of your project',
        },


        {
            type: 'input',
            name: 'Installation',
            message: 'What are the steps to install your project?',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'Provide instructions and examples for use',
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'List your collaborators, if any with the links ',
        },
        {
            type: 'list',
            message: 'Add a license',
            choices: [
                'The Do What the Fuck You Want to Public License',
                'The Unlicense',
                'Eclipse Public License 1.0',
                'Boost Software License 1.0',
                'Apache 2.0 License',
                'The Hippocratic License 3.0',
                'The MIT License',
            ],
            name: 'License',
        },
        {
            type: 'input',
            name: 'Contribute',
            message: 'How can other developers contribute to your project?',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'How can other developers test your project? Provide example.',
        },
    ]);
};

const badges = {
    'The Do What the Fuck You Want to Public License': 'https://img.shields.io/badge/License-WTFPL-brightgreen.svg',
    'The Unlicense': 'https://img.shields.io/badge/license-Unlicense-blue.svg',
    'Eclipse Public License 1.0': 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
    'Boost Software License 1.0': 'https://img.shields.io/badge/License-Boost_1.0-lightblue.svg',
    'Apache 2.0 License': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    'The Hippocratic License 3.0': 'https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg',
    'The MIT License': 'https://img.shields.io/badge/License-MIT-yellow.svg',
};

const generateReadme = ({
    Title,
    Description,
    Installation,
    Usage,
    Credits,
    License,
    Contribute,
    Tests,
}) => `# ${Title}
![Badge for GitHub repo top language](${badges[License]})
Check out the badges hosted by [shields.io](https://shields.io/)
## Description 
${Description}
## Table of Contents
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)
 * [Contributing](#contributing)
 * [Tests](#tests)  
 * [Questions](#questions)
## Installation
*Steps required to install project and how to get the development environment running:*
${Installation}
## Usage 
*Instructions and examples for use:*
${Usage}
## Credits
*List anyone who helped on your project*
${Credits}
## License
${License}
## Contribute
*If you would like to contribute it, you can follow these guidelines for how to do so.*
${Contribute}
## Tests
*Tests for application and how to run them:*
${Tests}
![README File](assets/screenshot.png)
[Demo Video!](assets/Demo.mp4)
`;



const init = () => {
    userInfo()
        .then((answers) => fs.writeFileSync("./README.md", generateReadme(answers)))
        .then(() => console.log("Congratulations you wrote to ReadMe.md!"))
        .catch((err) => console.error(err));
};

init();
