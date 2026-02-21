// ============================================
// FILE READING FUNCTIONALITY
// ============================================
// Read content from a file using Node.js fs module
const fs = require('fs');
const myModule = require('./my-module.js');

fs.readFile('file.txt', 'utf8', function (err, data) {
    if (err) throw err;
    console.log(data);
});


// ============================================
// FILE WRITING FUNCTIONALITY
// ============================================
// Write content to a file using Node.js fs module
fs.writeFile('file.txt', 'Hello World!', function (err) {
    if (err) throw err;
    console.log('File saved!');
});


// ============================================
// WEB SERVER CREATION
// ============================================
// Create a basic HTTP server that responds with "Hello World!"
const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
}).listen(8080);


// ============================================
// MAKING HTTP REQUEST
// ============================================
// Fetch data from an external API using HTTPS module
const https = require('https');
https.get('https://jsonplaceholder.typicode.com/posts/1', (resp) => {
    let data = '';
    resp.on('data', (chunk) => {
        data += chunk;
    });
    resp.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on('error', (err) => {
    console.log("Error: " + err.message);
});


// ============================================
// CUSTOM MODULE DEFINITION
// ============================================
// Using the module function directly
console.log(myModule.myFunction());


// ============================================
// PROMISES
// ============================================
// Change this to false to see the rejection case
const condition = true;

const myPromise = new Promise((resolve, reject) => {
    if (condition) {
        resolve('Success!');
    } else {
        reject('Failure!');
    }
});

myPromise.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


// ============================================
// ASYNC/AWAIT
// ============================================
async function myAsyncFunction() {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
myAsyncFunction();
