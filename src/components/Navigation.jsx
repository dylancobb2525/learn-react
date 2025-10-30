import {Link} from "react-router-dom";
import "./../css/Navigation.css";
import { useState } from "react";

const Navigation = () => {

    const [menuOpen, setMenuOpen] = useState(false);
    const [downArrow, setDownArrow] = useState(true);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
        setDownArrow(!downArrow);
    };

    return (
        <nav id="main-nav">
            <a onClick={toggleMenu} id="toggle-nav" href="#">
                {downArrow?(<p>&darr;</p>):(<p>&uarr;</p>)}
                
                </a>
            <ul className={menuOpen?"": "hide-small"}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/houses">Houses</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
    
};

export default Navigation;