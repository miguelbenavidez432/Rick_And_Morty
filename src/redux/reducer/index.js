import { ADD_FAVORITE, DELETE_FAVORITE } from '../../redux/actionstypes/index';
import myFavorite from '../actions/index';

const inicialState = {
    characters: [],
    characterDetail: {},
    myFavorites: []
}

const reducer = (state = inicialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((character) => character.id !== action.payload)
            }        
        default:
            return {...state}
    }
}

export default reducer;