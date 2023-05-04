const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const { name, origin, status, image, species, gender } = req.body;
        if(!name || !origin || !status || !image || !species || !gender){ return res.status(401).json({message: 'Faltan datos'})};

        const newFav = await Favorite.create({
            name,
            status,
            species,
            gender,
            origin,
            image,
        })

        const allFavs = await Favorite.findAll();
        return res.status(200).json(allFavs);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}


module.exports = postFav;