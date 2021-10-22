
const home = (req, res) => {
    res.send('Hello, world!')
}

const hello = (req, res) => {
    const name = req.params.name || 'world'
    res.send(`Hello ${name}`)
}

module.exports = {
    home,
    hello
}