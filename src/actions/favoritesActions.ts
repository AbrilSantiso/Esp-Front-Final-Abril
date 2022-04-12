import {Action, ActionCreator} from "@reduxjs/toolkit";
import Personaje from "../types/character.types";

 interface MarcarFavoritoAction extends Action{
    type: "MARCAR_FAVORITO",
    personaje: Personaje
}

 interface DesmarcarFavoritoAction extends Action{
    type: "DESMARCAR_FAVORITO",
    personaje: Personaje
}

 interface DesmarcarTodosAction extends Action{
    type: "DESMARCAR_TODOS"
}

export const marcarFavorito:ActionCreator<MarcarFavoritoAction> = (personaje: Personaje) => {
    return {
        type: "MARCAR_FAVORITO",
        personaje: personaje
    }
}

export const desmarcarFavorito:ActionCreator<DesmarcarFavoritoAction> = (personaje: Personaje) => {
    return {
        type: "DESMARCAR_FAVORITO",
        personaje: personaje
    }
}

export const desmarcarTodos:ActionCreator<DesmarcarTodosAction> = () => {
    return {
        type: "DESMARCAR_TODOS"
    }
}

export type FavoritosAction =
    | MarcarFavoritoAction
    | DesmarcarFavoritoAction
    | DesmarcarTodosAction
   