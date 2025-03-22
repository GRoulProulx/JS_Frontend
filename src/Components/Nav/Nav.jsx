import { NavLink } from "react-router-dom";
import "./Nav.css";

// Ressource Pour isActive:
// https://stackoverflow.com/questions/34418254/how-do-i-add-an-active-class-to-a-link-from-react-router
function Nav() {
    return (
        <nav className="main-nav">
            <div className="logo">
                <span className="logo-text">CINESOUND</span>
            </div>
            <div className="nav-links">
                <ul className="primary-links">
                    <li>
                        <NavLink to="/" >
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/soundtracks-list"
                            >
                            Bande Sonores
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/add-soundtrack" >
                            Ajouter une bande sonore
                        </NavLink>
                    </li>
                </ul>
                <ul className="secondary-links">
                    <li>
                        <NavLink to="/about">À propos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/logout">Déconnexion</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;
