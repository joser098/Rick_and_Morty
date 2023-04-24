import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actionsTypes";

const initialState = {
    myFavorites: [],
    allCharacters: []
};


const reducer = (state = initialState, { type, payload }) => {
    switch( type ){
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload }

        case REMOVE_FAV:
            return { ...state, myFavorites: payload }   
         
        case FILTER:
            return {
                ...state,
                myFavorites:
                 payload === "allCharacters"
                 ? [...state.allCharacters]
                 : state.allCharacters.filter(char => char.gender === payload)            
            }    

        case ORDER:
            const allCharCopy = [...state.allCharacters]
            return {
                ...state,
                myFavorites:
                    payload === 'A'
                    ? allCharCopy.sort((a, b) => a.id - b.id) 
                    : allCharCopy.sort((a, b) => b.id - a.id)
            }    


        default:
            return {...state}
    }
}


export default reducer;