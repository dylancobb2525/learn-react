import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/House.css";
import House from "../components/House";

const HouseList = (props) => {
    const [houses, setHouses] = useState([]);

    //after page has loaded
    useEffect(()=>{
        const loadHouses = async() => {
            try {
                const response = await axios.get("https://server-houses-scai.onrender.com/api/houses");
                // Handle nested array response - flatten if needed
                const housesData = Array.isArray(response.data[0]) ? response.data[0] : response.data;
                setHouses(housesData.splice(0,props.num));
            } catch (error) {
                console.error("Error loading houses:", error);
            }
        };

        loadHouses();
    },[]);

    return (
        <div id="house-list" className="columns">
            {houses.map((house)=>(
                <House  key={house._id} 
                        id={house._id}
                        name={house.name} 
                        size={house.size}
                        bedrooms={house.bedrooms}
                        bathrooms={house.bathrooms}
                        main_image={house.main_image}
                        features={house.features} />
            ))}
        </div>
    )
};

export default HouseList;
