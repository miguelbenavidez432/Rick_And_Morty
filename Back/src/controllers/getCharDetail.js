const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/";

const getCharDetail = (req, res) => {
    const { id } = req.params;
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then( response =>  {
        let char = {
            id: response.data.id,
            name: response.data.name,
            image: response.data.image,
            gender: response.data.gender,
            species: response.data.species,
            status: response.data.status,
            origin: response.data.origin?.name
        }
        res.status(200).json(char)
    })
    .catch(err=>
        res.status(500).json({message: err})      
        )
    
       
} 

module.exports = getCharDetail;