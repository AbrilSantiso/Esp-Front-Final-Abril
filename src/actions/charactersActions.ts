import {Action, ActionCreator, ThunkAction} from "@reduxjs/toolkit";
import { buscarPersonajesAPI } from "../services/characters.services";
import {IRootState} from "../store/store";
import Personaje from "../types/character.types";

export interface BuscarPersonajesAction extends Action{
    type: "BUSCAR_PERSONAJES",
    name: string
}

export interface BuscarPersonajesSuccessAction extends Action{
    type: "BUSCAR_PERSONAJES_SUCCESS",
    personajes: Personaje[]
}

export interface BuscarPersonajesErrorAction extends Action{
    type: "BUSCAR_PERSONAJES_ERROR",
    error: string;
}

export interface BuscarPersonajesThunkAction extends ThunkAction<void, IRootState, unknown, PersonajesAction>{}

const buscarPersonajes:ActionCreator<BuscarPersonajesAction> = (busqueda: string) => {
    return {
        type: "BUSCAR_PERSONAJES",
        name: busqueda
    }
}

const buscarPersonajesSuccess:ActionCreator<BuscarPersonajesSuccessAction> = (personajes: Personaje[]) => {
    return {
        type: "BUSCAR_PERSONAJES_SUCCESS",
        personajes: personajes
    }
}

const buscarPersonajesError:ActionCreator<BuscarPersonajesErrorAction> = (error: string) => {
    return {
        type: "BUSCAR_PERSONAJES_ERROR",
        error: error
    }
} 

export const buscarPersonajesThunk = (name?: string, page?:number): BuscarPersonajesThunkAction => {
    return async (dispatch, getState) => {
            dispatch(buscarPersonajes(name))
            try{
                const response = await buscarPersonajesAPI(name, page);
                dispatch(buscarPersonajesSuccess(response))
            }catch(e){
                dispatch(buscarPersonajesError(e))
            }
        }
    }



export type PersonajesAction =
    | BuscarPersonajesAction
    | BuscarPersonajesSuccessAction
    | BuscarPersonajesErrorAction;