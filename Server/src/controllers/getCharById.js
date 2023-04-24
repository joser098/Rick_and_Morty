const axios = require("axios")
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
  const { id } = req.params
  axios(`${URL}${id}`)
  .then(({data}) => {
    const character = {
      id: id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin.name,
      image: data.image,
      gender: data.gender
    }

    id
    ? res.json(character)
    : res.status(404).json("Not fount")
  })
  .catch((error) => res.status(500).json({error: error.message}))
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