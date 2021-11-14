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

            ],
            name: 'license',
        },
    ])

    const init = () => {

        userInfo()
            .then((answers) => fs.writeFileSync("./README.md", generateReadme(answers)))
            .then(() => console.log("Congratulations you wrote to ReadMe.md!"))
            .catch((err) => console.error(err));
    };

    init();
