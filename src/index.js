require('dotenv').config();

const express = require('express'); //commonjs
const app = express(); //app express
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const connection = require('./config/database');

//if PORT doesn't exists, 8888 will be the port default
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//declare route
app.use('/', webRoutes);

//test connection

// simple query
connection.query(
    'select * from Persons p',
    function (err, results, fields) {
        console.log(">>> check results (sever): ", results);
        // console.log(">>> check fields: ", fields);
    }
);

app.listen(port, hostname, () => {
    console.log(`Running on http://${hostname}:${port}`)
});