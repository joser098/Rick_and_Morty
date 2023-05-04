const { User } = require('../DB_connection');

const login = async(req, res) => {
    try {
        const { email, password } = req.query;
        if(!email || !password) res.status(400).json({ message: 'Faltan datos'});

        const emailFound = await User.findOne({ where: {email: email}});
        if(!emailFound){ return res.status(404).json({message: 'Usuario no encontrado'})};
        
        const passwordFound = await User.findOne({where: {email: email, password: password}});
        if(!passwordFound){ return res.status(403).json({ message: 'Contraseña incorrecta' })}

    
        return res.status(200).json({ acces: true })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}



module.exports = login;