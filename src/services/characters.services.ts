import Personaje from "../types/character.types"

interface data {
    info:{
        next:  string | null,
        prev: string  | null
    },
    results: Personaje[]
}


export const buscarPersonajesAPI = async (nombre?: string, page?: number): Promise<data> => {
    let params = "?"
    if (nombre && !page){
        params += `name=${nombre}`
    }
    if(page && !nombre){
        params += `page=${page}`
    }
    if(page && nombre){
        params += `name=${nombre}&page=${page}`
    }
    return fetch(`https://rickandmortyapi.com/api/character/${params}`)
        .then(data => data.json())
}