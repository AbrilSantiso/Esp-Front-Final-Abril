import {Link} from "react-router-dom";
import './encabezado.css';

/**
 * Este componente renderiza los links para navegar entre las páginas de la aplicación
 * @author Abril Santiso
 * @returns {JSX.Element}
 */
const Encabezado = (): JSX.Element => {

    return <header>
            <div>
                <div>
                    <h2>Examen Final de Frontend IV</h2>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/favoritos">Favoritos</Link></li>
                        <li><Link to="/detalle">Detalle</Link></li>
                    </ul>
                </nav>
            </div>
    </header>
}

export default Encabezado