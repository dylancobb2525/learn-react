import "../css/House.css";
import {useState} from "react";
import HouseDialog from "./HouseDialog"

const House = (props) => {
    const [showDialog, setShowDialog] = useState(false);

    const showHouseDetails = () => {
        console.log("hi");
        setShowDialog(true);
    }

    const closeHouseDetails = () => {
        setShowDialog(false);
    }
    return (
        <>
            {showDialog?(
                <HouseDialog closeHouseDialog={closeHouseDetails} 
                    name={props.name}
                    bedrooms={props.bedrooms}
                    size={props.size}
                    bathrooms={props.bathrooms}
                    main_image={props.main_image}
                    features={props.features}/>
            ):("")}
            <section className="house" onClick={showHouseDetails}>
                <img src={"https://server-houses-scai.onrender.com/images/"+props.main_image} alt="house" />
                <div className="house-description">
                    <h1>{props.name}</h1>
                    <p>{props.bedrooms} Bedrooms</p>
                </div>
            </section>
        </>
    );
};

export default House;