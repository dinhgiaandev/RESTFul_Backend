require('dotenv').config();

const express = require('express'); //commonjs
const app = express(); //app express
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');

//if PORT doesn't exists, 8888 will be the port 
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

//config template engine
configViewEngine(app);

//declare route
app.use('/', webRoutes);

app.listen(port, hostname, () => {
    console.log(`Running on ${port}`)
});