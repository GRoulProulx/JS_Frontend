import "./Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav className="main-nav">
            <div className="logo">
                <span className="logo-text">CINESOUND</span>
            </div>
            <div className="nav-links">
                <ul className="primary-links">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }>
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/soundtracks-list"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }>
                            Bande Sonores
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/add-soundtrack"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }>
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
