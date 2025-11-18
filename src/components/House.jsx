import "../css/House.css";
import {useState} from "react";
import HouseDialog from "./HouseDialog"

const House = (props) => {
    const [house, setHouse] = useState(props);
    const [showHouse, setShowHouse] = useState(true);
    const [showDialog, setShowDialog] = useState(false);

    const showHouseDetails = () => {
        setShowDialog(true);
    }

    const closeHouseDetails = () => {
        setShowDialog(false);
    }

    const updateHouse = (house) => {
        setHouse(house);
    };

    const hideHouse = () => {
        setShowHouse(false);
    };

    const features = Array.isArray(house.features) ? house.features : [];

    return (
        <>
            {showDialog?(
                <HouseDialog closeHouseDialog={closeHouseDetails} 
                    _id={house._id}
                    name={house.name}
                    bedrooms={house.bedrooms}
                    size={house.size}
                    bathrooms={house.bathrooms}
                    main_image={house.main_image}
                    features={features}
                    updateHouse={updateHouse}
                    hideHouse={hideHouse} />
            ):("")}

            {showHouse?(
                <section className="house" onClick={showHouseDetails}>
                    <img src={"http://localhost:3001/images/"+house.main_image} alt="house" />
                    <div className="house-description">
                        <h1>{house.name}</h1>
                        <p>{house.bedrooms} Bedrooms</p>
                    </div>
                </section>
            ):("")}
            
        </>
    );
};

export default House;