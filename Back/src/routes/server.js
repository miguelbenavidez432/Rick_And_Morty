const express = require('express');
const favsRouter = require('./favRoutes');
const server = express();
const router = require('./index');
const cors = require('cors');
const { saveApiData } = require('../controllers/saveApiData')
const { sequelize } = require('../DB_connection')
const getAllChars = require('../controllers/getAllChars')


server.use(express.json());
server.use(cors());
server.use('/rickandmorty', router);
server.use('/favs', favsRouter);



server.get('/rickandmorty/allCharacters', async (req, res) =>{
    try {
        const allCharacters = await getAllChars();
        res.status(200).json(allCharacters)
    } catch (error) {
        res.status(404).send('Hubo un problema')
    }
})
sequelize.sync({force: true}).then(() => {
    saveApiData();
    server.listen(3001, () => {
        console.log('Server raised in port ' + 3001);
})
 });
// http.createServer((req, res) =>{

//     res.setHeader('Access-Control-Allow-Origin', '*')
    
//     let id= req.url.split('/').at(-1);

//     if(req.url.includes('onsearch')){
//             getCharById(res,id)
//     }
//     if(req.url.includes('detail')){
//             getCharDetail(res,id)
//     }


// }).listen(3001, 'localhost')

module.exports = server