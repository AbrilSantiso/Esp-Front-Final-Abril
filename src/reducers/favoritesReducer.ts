import {Reducer} from "@reduxjs/toolkit";
import { FavoritosAction } from "../actions/favoritesActions";
import Personaje from "../types/character.types";

export interface FavoritesState{
    favoritos: Personaje[],
}

const initialState: FavoritesState = {
    favoritos: [],
};

const favoritosReducer:Reducer<FavoritesState, FavoritosAction> =
    (state = initialState, action): FavoritesState => {
    switch(action.type){
        case "MARCAR_FAVORITO":
            return {
                ...state,
                favoritos: [...state.favoritos, action.personaje]
            }
        case "DESMARCAR_FAVORITO":
            return {
                ...state,
                favoritos: state.favoritos.filter(
                    (favorito: Personaje) => favorito.id !== action.personaje.id
                )
            }
            case "DESMARCAR_TODOS":
            return {
                ...state,
                favoritos: []
            }
        default:
            return state;
    }
}
export default favoritosReducer;