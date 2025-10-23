import {Link} from "react-router-dom";
import "./../css/Navigation.css";

const Navigation = () => {
    return (
        <nav id="main-nav">
            <ul className="columns">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/houses">Houses</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
    
};

export default Navigation;