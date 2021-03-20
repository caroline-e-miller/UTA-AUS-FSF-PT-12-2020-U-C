const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Be sure to update with your own MySQL password!
    password: '',
    database: 'greatBayDB',
});

const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./generateMarkdown');

// Creates writeFile function using promises instead of a callback function
const saveMarkdown = util.promisify(fs.writeFile);

// Creates an array of questions for user input
const startQuestion = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'post/bid',
            message: 'Would you like to post or bid?',
            choices: ['Post', 'Bid']
        }
    ]);
};

if (data.choices === 'Post') {
    postQuestion.then(createProduct);
}

// const createProduct = () => {
//     console.log('Inserting a new product...\n');
//     const query = connection.query(
//         'INSERT INTO products SET ?',
//         {
//             flavor: 'Rocky Road',
//             price: 3.0,
//             quantity: 50,
//         },
//         (err, res) => {
//             if (err) throw err;
//             console.log(`${res.affectedRows} product inserted!\n`);
//             // Call updateProduct AFTER the INSERT completes
//             updateProduct();
//         }
//     );

const postQuestion = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'itemName',
            message: 'What item are you posting?'
        },
        {
            type: 'input',
            name: 'startingPrice',
            message: 'What is your starting price?'
        }
    ]);
};


const bidQuestion = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'itemChoice',
            message: 'What item are you bidding on?',
            choices: ['Creepy Doll circa 1895', 'Used Wedding Dress - bad vibes']
        },
        {
            type: 'input',
            name: 'bidPrice',
            message: 'What are you willing to bid?'
        }
    ])
}
// Creates a function to initialize app
// function init() {
//     questions()
//         .then((data) => saveMarkdown('customREADME.md', generateMarkdown(data))) // generateMarkdown is a guess, generateHTML doesn't work
//         .then(() => console.log('Wrote to customREADME.md'))
//         .catch((err) => console.error(err));
// };

const readProducts = () => {
    console.log('Selecting all items...\n');
    connection.query('SELECT * FROM items', (err, res) => {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.log(res);
        connection.end();
    });
};

const deleteProduct = () => {
    console.log('Deleting all cursed dolls...\n');
    connection.query(
        'DELETE FROM products WHERE ?',
        {
            flavor: 'Creepy Doll circa 1895',
        },
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} products deleted!\n`);
            // Call readProducts AFTER the DELETE completes
            readProducts();
        }
    );
};

const updateProduct = () => {
    console.log('Updating all item prices...\n');
    const query = connection.query(
        'UPDATE products SET ? WHERE ?',
        [
            {
                prices: data.bidPrice,
            },
            {
                item: data.item,
            },
        ],
        (err, res) => {
            if (err) throw err;
            console.log(`${res.affectedRows} products updated!\n`);
            // Call deleteProduct AFTER the UPDATE completes
            deleteProduct();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
};



// logs the actual query being run
console.log(query.sql);
// };

// Connect to the DB
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}\n`);
    createProduct();
});

function init() {
    let engineers = [];
    let interns = [];
    let addEmployee = false;
    startQuestion()
        .then(async (data) => {

            if (data.name === 'Post') {
                // prompt engineer questions
                postQuestions().then(() => {
                    const createProduct = () => {
                        console.log('Inserting a new product...\n');
                        const query = connection.query(
                            'INSERT INTO products SET ?',
                            {
                                flavor: 'Rocky Road',
                                price: 3.0,
                                quantity: 50,
                            },
                            (err, res) => {
                                if (err) throw err;
                                console.log(`${res.affectedRows} product inserted!\n`);
                                // Call updateProduct AFTER the INSERT completes
                                updateProduct();
                            }
                        );
                    }
                    createProduct();
                })
            } else if (employeeType === 'Bid') {
                // prompt intern questions
                bidQuestions().then((internData) => {
                    interns.push(internData);
                    employeeType = internData.employee;
                    addEmployee = internData.employee !== 'Finished';
                })
            }
            data.engineers = engineers;
            data.interns = interns;
            saveMarkdown('index.html', generateTeam(data))
        })
        .then(() => console.log('Wrote to index.html.'))
        .catch((err) => console.error(err));
};
