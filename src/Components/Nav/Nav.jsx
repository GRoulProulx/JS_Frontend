import "./Nav.css";
import { NavLink } from "react-router-dom";
function Nav() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Accueil</NavLink>
                </li>
                <li>
                    <NavLink to="/soundtracks">Bande Sonores</NavLink>
                </li>
                {/* <li>
                    <NavLink to="/soundtracks/add"></NavLink>
                </li> */}
                <li>
                    <NavLink to="/users">Liste des utilisateurs</NavLink>
                </li>
            </ul>
            <ul>
                <li><a href="">Déconnexion</a></li>
                <li><a href="">À propos</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    );
}
export default Nav;
