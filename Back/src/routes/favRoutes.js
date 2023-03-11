const { Router } =  require('express');
const { favs } = require('../utils/favs');
const favsRouter = Router();

favsRouter.post('/create', (req, res) => {
    favs.push({...req.body})
    return res.status(200).json(newChars)
})

favsRouter.get('/get', (req, res) => {
    res.status(200).json(favs)
})

favsRouter.delete('/delete/:id', (req, res) => {
    const { id } = req.params
    const charDelete = fav.filter(char => char.id !== Number(id))
    return res.status(200).json({ msg: `Personaje con el ID ${id} eliminado`, data: charDelete })
})

module.exports = favsRouter