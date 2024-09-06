const connection = require('../config/database')

const getHomepage = (req, res) => {
    let users = [];

    // connection.query(
    //     'select * from Persons p',
    //     function (err, results, fields) {
    //         users = results;
    //         console.log(">>> check results: ", results);

    //         // console.log(">>> check users: ", users);
    //         res.send(JSON.stringify(users))
    //     }
    // );
    res.send("Homepage")
}

const getUsers = (req, res) => {
    let users = [];

    connection.query(
        'select * from Persons p',
        function (err, results, fields) {
            users = results;
            // console.log(">>> check users: ", users);
            res.send(JSON.stringify(users))
        }
    );
}

const getDinhgiaan = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomepage, getUsers, getDinhgiaan }