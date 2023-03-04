import { ADD_FAVORITE, DELETE_FAVORITE } from '../../redux/actionstypes/index';

export const addFavorite = (character) => {
    return {type: ADD_FAVORITE, payload: character}
}
        
export const deleteFavorite = (id) => {
    return{ type: DELETE_FAVORITE, payload: id }
}

