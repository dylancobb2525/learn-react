import "./../css/Header.css";
import logo from "../images/house.jpg";

const Header = () => {
    return (
        <header id="main-header">
            <img id="logo" src={logo} alt="Logo" />
            <h1>Finding the Right Home</h1>
        </header>
    );
};

export default Header;