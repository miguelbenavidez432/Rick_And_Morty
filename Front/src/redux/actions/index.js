import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from '../../redux/actionstypes/index';
import axios from 'axios';

export const addFavorite = (character) => {    
    return async (dispatch) => {
    await axios.post(`http://localhost:3001/favs/create`, character)
    .then( res => {
        return dispatch({ type: ADD_FAVORITE, payload: res.data })
    })
    
}
}
        
export const deleteFavorite = (id) => {
    return async (dispatch) => {
    await axios.delete(`http://localhost:3001/favs/delete/${id}`)
    .then( res => {
            return dispatch({ type: DELETE_FAVORITE, payload: res.data })
        })
    }
}

export const filterCards = (status) => {
    return { type: FILTER, payload: status }
}

export const orderCards = (id) => {
    return { type: ORDER, payload: id }
}
