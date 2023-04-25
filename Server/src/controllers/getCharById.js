const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = async (req, res) => {
  try {
    const { id } = req.params
    const { data } = await axios(`${URL}${id}`)

    if(!data.name) throw new Error ("ID not found");

      const character = {
        id: id,
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        gender: data.gender
      }
      return res.status(200).json(character);
      
    } 

  catch (error) { 
    return error.message.includes('ID')
    ? res.status(404).send(error.message)
    : res.status(500).send(error.response.data.error)
    }
}


module.exports = getCharById;












// const axios = require("axios")

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(({data}) => {
//     const character = {
//         id: id,
//         name: data.name,
//         gender: data.gender,
//         species: data.species,
//         origin: data.origin.name,
//         image: data.image,
//         status: data.status
//     }
    
//     res.writeHead(200,{ "Content-Type": "application/json" })
//     res.end(JSON.stringify(character))
//   })
//   .catch((error) => {
//     res.writeHead(500, { "Content-Type": "text/plain" })
//     res.end(error)
//   })  
// }

// module.exports = getCharById 