import TarjetaPersonaje from './tarjeta-personaje.componente';
import {TypedUseSelectorHook, useSelector as useReduxSelector} from "react-redux";
import { IRootState } from '../../store/store';
import './grilla-personajes.css';

/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
*/

export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;

const GrillaPersonajes = (): JSX.Element => {

    const personajes = useSelector(state => state.personajes.personajes);
    const status = useSelector(state => state.personajes.status);

    if (status === "LOADING") return <div>Cargando personajes...</div>

    if (!personajes || personajes.length === 0) return <div>No hay personajes que coincidan con la busqueda</div>

    return <div className="grilla-personajes">
    {personajes.map((personaje) => {
            return ( <TarjetaPersonaje key={personaje.id} id={personaje.id} name={personaje.name} image={personaje.image}/> )
        })}
    </div>
}
 
export default GrillaPersonajes;