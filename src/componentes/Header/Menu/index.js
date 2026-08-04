import { Link } from "react-router-dom";

function Menu(){
    return (
     <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contato">Contato</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
        </ul>
    Home
    Contato
    Sobre
     </nav>
    )
}

export default Menu;