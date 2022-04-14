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
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 *
 *
 * @returns un JSX element
 */
const TarjetaPersonaje = ({ id, name, image }: Personaje): JSX.Element => {

  const dispatch = useDispatch();
  const favoritos = useSelector((state) => state.favoritos.favoritos);
  let esFavorito = favoritos.some((favorito) => favorito.id === id);

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
