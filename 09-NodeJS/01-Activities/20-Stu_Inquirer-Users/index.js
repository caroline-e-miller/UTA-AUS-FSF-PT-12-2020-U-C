const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your secondary language?',
            name: 'langauge,'
        },
        {
            type: 'input',
            message: 'What is your preferred method of communicaiton?',
            name: 'communication'
        }
    ])
    .then(() =>
        console.log("Wow, you're a super cool person.")
    )