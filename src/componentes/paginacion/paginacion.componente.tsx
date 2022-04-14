import { useDispatch } from "react-redux";
import { useSelector } from "../../store/store";
import {
  actualizarPageActual,
  buscarPersonajesThunk,
} from "../../actions/charactersActions";
import { useEffect } from "react";
import "./paginacion.css";

/**
 * Este componente renderiza los botones para avanzar o retroceder de página en la página de inicio
 * @author Abril Santiso
 * @returns {JSX.Element}
 */
const Paginacion = (): JSX.Element => {
  const page = useSelector((state) => state.personajes.page);
  const name = useSelector((state) => state.personajes.busqueda);
  const prev = useSelector((state) => state.personajes.prev);
  const next = useSelector((state) => state.personajes.next);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(buscarPersonajesThunk(name, page));
  }, [page]);

  /**
   * Esta función se ejecuta al clickear los botones de "Anterior" o "Siguiente"
   * Despacha la accion de actualizar la página segun el tipo de acción que corresponda
   * @param {string} accion 
   */
  const handleClick = (accion: string) => {
    dispatch(actualizarPageActual(accion));
  };

  return (
    <div className="paginacion">
      <button
        disabled={prev ? false : true}
        className={"primary"}
        onClick={()=> handleClick("DECREMENTAR")}
      >
        Anterior
      </button>
      <button
        disabled={next ? false : true}
        className={"primary"}
        onClick={()=> handleClick("AUMENTAR")}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Paginacion;
