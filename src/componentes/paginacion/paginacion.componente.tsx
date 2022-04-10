import { useDispatch } from 'react-redux';
import { useSelector } from '../personajes/grilla-personajes.componente';
import { actualizarPageActual, buscarPersonajesThunk } from '../../actions/charactersActions';
import './paginacion.css';
/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = (): JSX.Element => {
    
    const page = useSelector(state => state.personajes.page);
    const name = useSelector(state => state.personajes.busqueda);
    const prev = useSelector(state => state.personajes.prev)
    const next = useSelector(state => state.personajes.next)

    const dispatch = useDispatch();

    const handleClickAnterior = ()=> {
        dispatch(actualizarPageActual("DECREMENTAR"));
        dispatch(buscarPersonajesThunk(name, page))
    }
   
    const handleClickSiguiente = ()=> {
        dispatch(actualizarPageActual("AUMENTAR"));
        dispatch(buscarPersonajesThunk(name, page))
    }

    return <div className="paginacion">
        <button disabled={prev ? false : true} className={"primary"} onClick={handleClickAnterior}>Anterior</button>
        <button disabled={next ? false : true} className={"primary"} onClick={handleClickSiguiente}>Siguiente</button>
    </div>
}

export default Paginacion;