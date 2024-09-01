// //Load HTTP module (thư viện đã có sẵn khi cài đặt node.js)
// const http = require("http");
// const hostname = "127.0.0.1"; //cái này === http://localhost
// const port = 3003;
// //Create HTTP server and listen on port 3000 for requests
// const server = http.createServer((req, res) => {
//     //Set the response HTTP header with HTTP status and Content type
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");
//     res.end("Hello World\n");
// });
// //listen for request on port 3000, and as a callback function have the port listened on

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
// //tự động chạy trên localhost
// // server.listen(port, () => {
// // console.log(`Server running at http://${hostname}:${port}/`);
// // });

const express = require('express'); //commonjs
const app = express(); //app express
const path = require('path');
require('dotenv').config();

//if PORT doesn't exists, 8888 will be the port 
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//config static files: image/css/js
app.use(express.static(path.join(__dirname, 'public')));

//khai bao route
app.get('/', (req, res) => {
    res.send("Hello World! with Dinhgiaan")
});

app.get('/abc', (req, res) => {
    res.send("Check route")
});

app.get('/dinhgiaan', (req, res) => {
    // res.send("<h1>Holly molly</h1>")
    res.render('sample.ejs')
});

app.listen(port, hostname, () => {
    console.log(`Running on ${port}`)
});