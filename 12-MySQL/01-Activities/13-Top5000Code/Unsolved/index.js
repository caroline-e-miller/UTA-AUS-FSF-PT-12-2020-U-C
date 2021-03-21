const mysql = require('mysql');
const inquirer = require('inquirer');

// create the connection information for the sql database
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Your password
    password: '',
    database: 'top_songsDB',
});

connection.connect((err) => {
    if (err) throw err;
    console.log(connection.threadId);
    // queryAllSongs();
    // queryRockSongs();
})

// function which prompts the user for what action they should take
// DO A SWITCH STATEMENT HERE INSTEAD -- LOOK AT SOLUTION
const start = () => {
    inquirer
        .prompt([
            {
                name: 'searchType',
                type: 'list',
                message: 'What would you like to search for?',
                choices: ['Artist', 'Song', 'Rating', 'All-Stars']
            },
        ])
        .then((answer) => {
            // based on their answer, either call the bid or the post functions
            if (answer.searchType === 'Artist') {
                artist();
            } else if (answer.searchType === 'Song') {
                song();
            } else if (answer.searchType === 'Rating') {
                rating();
            } else if (answer.searchType === 'All-Stars') {
                allStars();
            } else {
                connection.end();
            }
        });
};

const artist = () => {
    const query = 'SELECT position, song, year FROM top5000 WHERE ?';
    connection.query(query, { artist: answer.artist }, (err, res) => {
        if (err) throw err;
        res.forEach(({ position, song, year }) => {
            console.log(
                `Position: ${position} || Song: ${song} || Year: ${year}`
            )
        })
    })
    // inquirer.prompt([
    //     {
    //         name: 'artistChoice',
    //         type: 'input',
    //         message: 'What artist would you like?',
    //     }
    // ])
    //     .then((data) => {
    //         if (data.artistChoice === data.artist)
    //             return data.artist;
    //     })
}

const readDatabase = () => {
    const query = 'SELECT song, position, artist FROM topsongs INNER JOIN artist ON year.artist = artist.id';
}