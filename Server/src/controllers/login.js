const users = require('../utils/users')

const login = (req, res) => {
    const { email, password } = req.query;

    const userFiltered = users.find(user => user.email === email && user.password === password)

    userFiltered
    ? res.status(200).json( { access: true } )
    : res.status(200).json( { access: false })

}


module.exports = login;