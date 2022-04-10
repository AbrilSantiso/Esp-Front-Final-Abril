import {Reducer} from "@reduxjs/toolkit";
import { PersonajesAction } from "../actions/charactersActions";
import Personaje from "../types/character.types";

export interface PersonajesState{
    busqueda: string;
    page: number;
    status: "LOADING" | "COMPLETED WITH SUCCESS" | "COMPLETED WITH ERROR"
    personajes: Personaje[],
    error: string | null
}

const initialState: PersonajesState = {
    busqueda: '',
    page: 1,
    status: "COMPLETED WITH SUCCESS",
    personajes: [],
    error: null
};

const personajesReducer:Reducer<PersonajesState, PersonajesAction> =
    (state = initialState, action): PersonajesState => {
    switch(action.type){
        case "BUSCAR_PERSONAJES":
            return {
                ...state,
                status: "LOADING",
                busqueda: action.name,
                error: null
            }
        case "BUSCAR_PERSONAJES_ERROR":
            return {
                ...state,
                status: "COMPLETED WITH ERROR",
                error: action.error
            }
        case "BUSCAR_PERSONAJES_SUCCESS":
            return {
                ...state,
                status: "COMPLETED WITH SUCCESS",
                personajes: action.personajes
            }
        default:
            return state;
    }
}
export default personajesReducer;