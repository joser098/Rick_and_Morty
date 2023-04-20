const axios = require("axios")

const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({data}) => {
    const character = {
        id: id,
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        status: data.status
    }
    
    res.writeHead(200,{ "Content-Type": "application/json" })
    res.end(JSON.stringify(character))
  })
  .catch((error) => {
    res.writeHead(500, { "Content-Type": "text/plain" })
    res.end(error)
  })  
}

module.exports = getCharById 