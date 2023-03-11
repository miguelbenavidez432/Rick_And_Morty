const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharById = (req, res) => {
    const { id} = req.params;
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then( response => response.data)
    .then( data =>
        {
        let char = {
            id: data.id,
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species
        }
        res.status(200).json(char)
    })
    .catch(err=>
        res.status(500).json({message: err})      
        )
} 

module.exports = getCharById;