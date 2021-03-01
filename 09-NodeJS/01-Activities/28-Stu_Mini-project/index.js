const fs = require('fs');

const inquirer = require('inquirer');

// name, location, bio, LinkedIn URL, and GitHub URL
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your location?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'What is the link to your biography?',
            name: 'biography',
        },
        {
            type: 'input',
            message: 'What is the link to your LinkedIn URL?',
            name: 'linkedin',
        },
        {
            type: 'input',
            message: 'What is the link to your GitHub URL?',
            name: 'github'
        }
    ])
    .then(() =>
        console.log("Wow, you're a super cool person.")
    )

// fs.appendFile('index.html', `${process.argv[2]}\n`, (err) =>
//     err ? console.error(err) : console.log('Commit logged!')
// );