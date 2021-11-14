const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
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
            name: 'license',
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
    'The Do What the Fuck You Want to Public License': '(https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)',
    'The Unlicense': '(https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    'Eclipse Public License 1.0': '(https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)',
    'Boost Software License 1.0': '(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)',
    'Apache 2.0 License': '(https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'The Hippocratic License 3.0': '(https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)',
    'The MIT License': '(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',





}

const init = () => {

    userInfo()
        .then((answers) => fs.writeFileSync("./README.md", generateReadme(answers)))
        .then(() => console.log("Congratulations you wrote to ReadMe.md!"))
        .catch((err) => console.error(err));
};

init();
