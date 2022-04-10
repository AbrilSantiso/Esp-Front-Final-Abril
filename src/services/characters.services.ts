import Personaje from "../types/character.types"

export const buscarPersonajesAPI = async (nombre?: string, page?: number): Promise<Personaje[]> => {
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
        .then(data => data.results)
}