import './boton-favorito.css';

interface BotonFavoritoProps {
    esFavorito: boolean,
    onClick: () => void;

}

/**
 * Este componente renderiza el botón que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * @author Abril Santiso
 * @param {boolean} esFavorito
 * @param {Function} onClick  
 * @returns {JSX.Element}
 */

const BotonFavorito = ({esFavorito, onClick}: BotonFavoritoProps): JSX.Element =>{

    const src: string = esFavorito ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    return <div className="boton-favorito" onClick={onClick}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;