const { Character } = require('../models/Character')

const getAllChars = async () => {
    try {
        const allCharecters = await Character.findAll();
        return allCharecters;
    } catch (error) {
        return { error: error.message }
    }
} 

module.exports = {
    getAllChars
}