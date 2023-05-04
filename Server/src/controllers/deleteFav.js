const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;
        
        const character = await Favorite.findByPk(id);
        if(!character){ return res.status(404).json({message: 'Ese id no es un favorito'})}
        await character.destroy();

        const allFavs = await  Favorite.findAll();
        return res.status(200).json(allFavs)
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


module.exports = deleteFav;