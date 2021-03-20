const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',

    port: 3306,

    user: 'root',

    password: 'thisIsMySQL2021a2*',
    database: 'playlist_DB',
});

// const queryAllSongs = () => {
//     connection.query('', (err, res), => {
//         if (err) throw err;
//         res.forEach(({ id, song, artist, genre})) => {
//             console.log(`${id} ${song} ${artist} ${genre}`)
//         }
//     })
// }

connection.connect((err) => {
    if (err) throw err;
    console.log(connection.threadId);
    // queryAllSongs();
    // queryRockSongs();
})