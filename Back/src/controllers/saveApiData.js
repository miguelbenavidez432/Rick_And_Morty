const axios = require('axios')
const { Character } = require('../models/Character');

const getApiData = async () => {
    try {
        let i = 1;
        let characters = [];

        while(i < 6){

            let apiData = await axios(`https://rickandmortyapi.com/api/character?page=${i}`)
            characters.push(apiData);
            i++;
        }
        characters = (await Promise.all(characters)).map(res => res.data.results.map(char => {
            return({
                id: char.id,
                name: char.name,
                species: char.species,
                status: char.status,
                origin: char.origin?.name,
                gender: char.gender,
                imagen: char.imagen
            })
        }))

        let allCharecters = [];
        characters.map(char => { allCharecters = allCharecters.concat(char) });
        return allCharecters;

    } catch (error) {
        return { error: error.message }
    }
}

const saveApiData = async () => {
    try {
        const allCharecters = await getApiData();
        const createCharacter = await Character.bulkCreate(allCharecters);
        
    } catch (error) {
        return { error: error.message }
    }

}

module.exports = {saveApiData}