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

export interface LimpiarBusquedaAction extends Action{
    type: "LIMPIAR_BUSQUEDA"
}

export interface ActualizarPagesAction extends Action{
    type: "ACTUALIZAR_NEXT_PREV"
    next: string | null,
    prev: string | null,
}

export interface ActualizarPageActualAction extends Action{
    type: "ACTUALIZAR_PAGE_ACTUAL"
    flag: "AUMENTAR" | "DECREMENTAR"
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

export const limpiarBusqueda:ActionCreator<LimpiarBusquedaAction> = () => {
    return {
        type: "LIMPIAR_BUSQUEDA",
    }
}

export const actualizarPages:ActionCreator<ActualizarPagesAction> = (info:{next: string | null, prev:string | null}) => {
    return {
        type: "ACTUALIZAR_NEXT_PREV",
        next: info.next,
        prev: info.prev
    }
}

 export const actualizarPageActual:ActionCreator<ActualizarPageActualAction> = (flag: "AUMENTAR" | "DECREMENTAR") => {
    return {
        type: "ACTUALIZAR_PAGE_ACTUAL",
        flag: flag
    }
}

export const buscarPersonajesThunk = (name?: string, page?:number): BuscarPersonajesThunkAction => {
    return async (dispatch, getState) => {
            dispatch(buscarPersonajes(name))
            try{
                const response = await buscarPersonajesAPI(name, page);
                let personajes = response.results;
                dispatch(buscarPersonajesSuccess(personajes));
                dispatch(actualizarPages(response.info));
            }catch(e){
                dispatch(buscarPersonajesError(e));
                dispatch(actualizarPages({next: null, prev: null}));
            }
        }
    }



export type PersonajesAction =
    | BuscarPersonajesAction
    | BuscarPersonajesSuccessAction
    | BuscarPersonajesErrorAction
    | LimpiarBusquedaAction
    | ActualizarPagesAction
    | ActualizarPageActualAction