import { useDispatch } from "react-redux";
import { desmarcarTodos } from "../actions/favoritesActions";
import { useSelector } from "../store/store";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";

/**
 * Componente que renderiza los personajes marcados como favoritos, si aún no hay 
 * personajes favoritos renderiza un mensaje indicandolo.
 * @author Abril Santiso
 * @returns {JSX.Element}
 */
const PaginaFavoritos = () => {

  const favoritos = useSelector((state) => state.favoritos.favoritos);
  const dispatch = useDispatch();
   
   /**
   * Función que se ejecuta al clickear el botón de "Eliminar todos"
   * Despacha la acción de desmarcar todos los favoritos.
   */
  const handleClick = ()=>{
    dispatch(desmarcarTodos())
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={handleClick}>Eliminar todos</button>
      </div>
      <div className="grilla-personajes">
          
        {favoritos.length > 0 ? favoritos.map((personaje) => {
          return (
            <TarjetaPersonaje
              key={personaje.id}
              id={personaje.id}
              name={personaje.name}
              image={personaje.image}
            />
          );
        }): <h2>Aún no tenes favoritos</h2>}
      </div>
    </div>
  );
};

export default PaginaFavoritos;
