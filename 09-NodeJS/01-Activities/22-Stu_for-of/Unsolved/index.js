const fs = require('fs');

fs.readFile('index.html', 'utf8', (error, data) =>
    error ? console.error(error) : console.log(data)
)

// let songName = `$${data.song}`;
// console.log("song names: ")