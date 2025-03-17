import Nav from "../Nav/Nav";
import "./Header.css";
import { Link } from "react-router-dom";
function Header() {
    return (
        <header>
            <div>
                <Link className="logo-container" to="/">
                    <img src="/logo2.png" alt="logo" className="logo" />
                </Link>
            </div>
            <Nav />
        </header>
    );
}

export default Header;

