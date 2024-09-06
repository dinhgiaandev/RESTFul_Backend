const connection = require('../config/database')

const getHomepage = (req, res) => {
    return res.render('home.ejs')
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

const postCreateUser = (req, res) => {
    /*
    let email = req.body.email;
    let name = req.body.name;
    let city = req.body.city;
        OR
    */
    let { email, name, city } = req.body;

    console.log(">>> check: ", email, name, city)

    connection.query(
        `INSERT INTO Users (email, name, city) VALUES (?, ?, ?)`, //mỗi ? = với giá trị của email, name, city
        [email, name, city], //ở đây giá trị: email, name, city ứng với mỗi dấu ?
        function (err, results) {
            res.send("Create User Succeed!")
        }
    );
}

module.exports = { getHomepage, getUsers, getDinhgiaan, postCreateUser }