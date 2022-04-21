import {Reducer} from "@reduxjs/toolkit";
import { PersonajesAction } from "../actions/charactersActions";
import Personaje from "../types/character.types";

export interface PersonajesState{
    busqueda: string;
    page: number;
    next: string | null,
    prev: string | null,
    status: "LOADING" | "COMPLETED WITH SUCCESS" | "COMPLETED WITH ERROR"
    personajes: Personaje[],
    error: string | null,
}

const initialState: PersonajesState = {
    busqueda: '',
    page: 1,
    next: "https://rickandmortyapi.com/api/character/?page=2",
    prev: null,
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
        case "LIMPIAR_BUSQUEDA":
            return {
                ...state,
                busqueda: "",
                page: 1
            }    
        case "ACTUALIZAR_NEXT_PREV":
                return {
                    ...state,
                    next: action.next,
                    prev: action.prev
                }
        case "ACTUALIZAR_PAGE_ACTUAL":
            if(action.flag === "AUMENTAR"){
                    return {
                        ...state,
                       page: state.page + 1
                    }
                }else{
                    return {
                        ...state,
                       page: state.page -1
                    }
                }           
        default:
            return state;
    }
}
export default personajesReducer;