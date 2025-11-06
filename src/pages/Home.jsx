import Slideshow from "./../components/Slideshow";
import HouseList from "../components/HouseList";
import "./../css/Home.css";

const Home = () => {
    return (
        <main id="home" className="main-content">
            <Slideshow />
            <HouseList num="3" />
        </main>
    );
};

export default Home;