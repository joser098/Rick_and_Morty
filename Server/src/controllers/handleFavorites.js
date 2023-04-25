let myFavorites = [];

const postFav = (req, res) => {
    try {
        const character = req.body;
        const characterFound = myFavorites.find(char => char.id === character.id)
        if(characterFound) throw Error ("El ID existe en favoritos")

        myFavorites.push(character)
        console.log(myFavorites)
        return res.status(200).json(myFavorites)
    } catch (error) {
        return res.status(404).send(error.message)
    }
}

const deleteFav = (req, res) => {
    const { id }  = req.params;
    
    myFavorites = myFavorites.filter(char => char.id !== id)
    console.log(myFavorites)
    return res.status(200).json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}