import { useDispatch } from "react-redux";
import { desmarcarTodos } from "../actions/favoritesActions";
import GrillaPersonajes, {
  useSelector,
} from "../componentes/personajes/grilla-personajes.componente";
import TarjetaPersonaje from "../componentes/personajes/tarjeta-personaje.componente";
/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <PaginaFavoritos /> ```
 *
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

  const favoritos = useSelector((state) => state.favoritos.favoritos);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={()=> {dispatch(desmarcarTodos())}}>Eliminar todos</button>
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
