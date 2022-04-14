import TarjetaPersonaje from './tarjeta-personaje.componente';
import { useSelector } from '../../store/store';
import './grilla-personajes.css';

/**
 * Componente que renderiza las tarjetas de los personajes, si el status del estado global se encuentra "Cargando" renderiza un mensaje indicandolo y si no hay personajes en el estado renderiza un mensaje indicando que no hay personajes que coincidan con la busqueda.
 * @author Abril Santiso
 * @returns {JSX.Element}
 */
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