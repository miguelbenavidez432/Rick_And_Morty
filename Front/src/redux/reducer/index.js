import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER} from '../../redux/actionstypes/index.js';

const inicialState = {
    myFavorites: [],
    allCharacters: []
}

const reducer = (state = inicialState, action) => {
    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites: action.payload
            }       
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(chars => chars.gender === action.payload)
            return{
                ...state,
                myFavorites: allCharactersFiltered
            }
            
        case ORDER:
            return{
                ...state,
                myFavorites: action.payload === 'Ascendente'
                ? state.allCharacters.sort((a,b) => a.id - b.id) 
                : state.allCharacters.sort((a,b) => b.id - a.id) 
            }
        default:
            return {...state}
    }
}

export default reducer;