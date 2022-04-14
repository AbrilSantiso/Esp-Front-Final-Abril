import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useDispatch } from 'react-redux';
import { buscarPersonajesThunk, limpiarBusqueda } from "../actions/charactersActions";

/**
 * Componente que renderiza el home: la barra para filtrar personajes por su nombre junto con la grilla de personajes.
 * @author Abril Santiso
 * @returns {JSX.Element}
 */
const PaginaInicio = () => {

    const dispatch = useDispatch();

    /**
   * Función que se ejecuta al clickear el botón de "Limpiar filtros"
   * Despacha la acción de setear los personajes nuevamente al estado inicial y la de limpiar el valor del input de la busqueda
   */ 
    const limpiarFiltros=()=>{
        dispatch(buscarPersonajesThunk());
        dispatch(limpiarBusqueda())
    }

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={limpiarFiltros}>Limpiar filtros</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes />
        <Paginacion />
    </div>
}

export default PaginaInicio