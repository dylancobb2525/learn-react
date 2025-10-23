import "./../css/House.css";
import House from "../components/House";

const Houses = () => {
    return (
        <main id="contact" className="main-content">
            <h2>Houses</h2>
            <div className="columns">
                <House name="Farm House" num_bedrooms="5" />
                <House name="Mansion" num_bedrooms="10" />
                <House name="Family Home" num_bedrooms="3" />
            </div>
            
        </main>
    )
};

export default Houses;