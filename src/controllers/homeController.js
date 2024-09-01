const getHomepage = (req, res) => {
    res.send("Hello World! with Dinhgiaan")
}

const getABC = (req, res) => {
    res.send("Check ABC")
}

const getDinhgiaan = (req, res) => {
    res.render('sample.ejs')
}

module.exports = { getHomepage, getABC, getDinhgiaan }