const http = require('http');

const PORTOne = 7000;
const PORTTwo = 7500;

const handleRequest = (request, response) => {
    response.end(`It works! Path hit: ${request.url}`);
};

const serverOne = http.createServer(handleRequest);
const serverTwo = http.createServer(handleRequest);

serverOne.listen(PORTOne, () => {
    console.log(`Server listening on: http://localhost:${PORTOne}`)
})

serverTwo.listen(PORTTwo, () => {
    console.log(`Server listening on: http://localhost:${PORTTwo}`)
})