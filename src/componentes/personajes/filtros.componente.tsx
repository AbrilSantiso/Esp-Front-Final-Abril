import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "../../store/store";
import { buscarPersonajesThunk } from "../../actions/charactersActions";
import "./filtros.css";

/**
 * Este componente renderiza el input para buscar personajes por nombre.
 * @author Abril Santiso
 * @returns {JSX.Element}
 */

const Filtros = (): JSX.Element => {
  const dispatch = useDispatch();
  const busqueda = useSelector((state) => state.personajes.busqueda);

  /**
   * Función que se ejecuta al cambiar el valor del input, despacha la ThunkAction de buscar personajes con el texto ingresado en el input como filtro de busqueda
   * @param {string} value
   */
  const handleChange = (value: string) => {
    dispatch(buscarPersonajesThunk(value));
  };

  useEffect(() => {
    dispatch(buscarPersonajesThunk());
  }, []);

  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        value={busqueda}
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default Filtros;
