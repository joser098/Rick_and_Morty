const users = require('../utils/users')

const login = (req, res) => {
    const { email, password } = req.query;

    const userFiltered = users.filter(user => user.email === email && user.password === password)

    userFiltered.length !== 0
    ? res.status(200).json( { access: true } )
    : res.status(200).json( { access: false })

}


module.exports = login;