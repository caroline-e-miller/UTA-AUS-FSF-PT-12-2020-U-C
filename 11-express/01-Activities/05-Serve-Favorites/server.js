const http = require("http");
const fs = require('fs');

const PORT = 8080;

// When someone visits the "http://localhost:8080/portfolio" path, this function is run.
const displayHome = (res) => {
    const myHTML = `
    <html>
      <body>
        <h1>Home Page</h1>
        <a href='/'>Go Home</a>
      </body>
    </html>`;

    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
};

const displayFood = (res) => {
    const myHTML = `
    <html>
      <body>
        <h1>Fave Foods</h1>
        <a href='/'>Go Home</a>
      </body>
    </html>`;

    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
};

const displayMovies = (res) => {
    const myHTML = `
    <html>
      <body>
        <h1>Fave Movies</h1>
        <a href='/'>Go Home</a>
      </body>
    </html>`;

    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
};

const displayCSS = (res) => {
    const myHTML = `
    <html>
      <body>
        <h1>Fave CSS Frameworks</h1>
        <a href='/'>Go Home</a>
      </body>
    </html>`;

    // Configure the response to return a status code of 200 (meaning everything went OK), and to be an HTML document
    res.writeHead(200, { 'Content-Type': 'text/html' });

    // End the response by sending the client the myHTML string (which gets rendered as an HTML document thanks to the code above)
    res.end(myHTML);
};
// Create a function which handles incoming requests and sends responses

const handleRequest = (req, res) => {
    // Capture the url the request is made to
    const path = req.url;

    // Depending on the URL, display a different HTML file.
    switch (path) {
        case '/':
            return displayHome(res);

        case '/movies':
            return displayMovies(res);

        case '/food'
            return displayFood(path, res);
    }
};

// Assign our createServer method to a variable called "server"
const server = http.createServer(handleRequest);

// Start our server
server.listen(PORT, () => {
    // Callback triggered when server is successfully listening. Hurray!
    console.log(`Server listening on: http://localhost:${PORT}`);
});

const handleRequest = (req, res) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if (err) throw err;

        res.writeHead(200, { 'content-Type': 'test/html' });
        res.end(data);
    })
}