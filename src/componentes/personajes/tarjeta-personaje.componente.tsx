import BotonFavorito from "../botones/boton-favorito.componente";
import Personaje from "../../types/character.types";
import "./tarjeta-personaje.css";
import { useSelector } from "../../store/store";
import { useDispatch } from "react-redux";
import {
  desmarcarFavorito,
  marcarFavorito,
} from "../../actions/favoritesActions";

/**
 * Este componente es la card de cada persona que se renderiza en la grilla de personajes.
 * @author Abril Santiso
 * @param {Personaje} personaje
 * @returns {JSX.Element}
 */

const TarjetaPersonaje = ({ id, name, image }: Personaje): JSX.Element => {

  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.favoritos.favoritos);
  let esFavorito = favoritos.some((favorito) => favorito.id === id);
  
  /**
   * Función que se ejecuta al clickear el botón de Favorito.
   * Si el personaje aún no ha sido marcado como favorito, despacha la acción de marcarlo como favorito, en caso contrario lo desmarca.
   */
  const handleClick = () => {
    if (esFavorito) {
      dispatch(desmarcarFavorito({ id, name, image }));
    } else {
      dispatch(marcarFavorito({id, name, image}));
    }
  };

  return (
    <div className="tarjeta-personaje">
      <img src={image} alt={name} />
      <div className="tarjeta-personaje-body">
        <span>{name}</span>
        <BotonFavorito esFavorito={esFavorito} onClick={handleClick} />
      </div>
    </div>
  );
};

export default TarjetaPersonaje;
