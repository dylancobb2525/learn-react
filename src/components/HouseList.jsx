import {useState, useEffect} from "react";
import axios from "axios";
import "../css/House.css";
import House from "../components/House";
import AddHouse from "../components/AddHouse";

const HouseList = (props) => {
    const [houses, setHouses] = useState([]);
    const [showAddDialog, setShowAddDialog] = useState(false);

    const openAddDialog = () => {
        setShowAddDialog(true);
    }

    const closeAddDialog = () => {
        console.log("I'm in the close method")
        setShowAddDialog(false);
    }

    const updateHouses = (house) => {
        setHouses((houses)=>[...houses, house]);
    };

    //after page has loaded
    useEffect(()=>{
        const loadHouses = async() => {
            const response = await axios.get("http://localhost:3001/api/houses");
            setHouses(response.data.splice(0,props.num));
        };

        loadHouses();
    },[]);

    return (
        <>
            <button id="add-house" onClick={openAddDialog}>+</button>

            {showAddDialog?(<AddHouse 
                                closeAddDialog={closeAddDialog} 
                                updateHouses={updateHouses}
                                /> ): ("")}

            <div id="house-list" className="columns">
                {houses.map((house)=>(
                    <House  key={house._id} 
                            _id={house._id}
                            name={house.name} 
                            size={house.size}
                            bedrooms={house.bedrooms}
                            bathrooms={house.bathrooms}
                            main_image={house.main_image}
                            features={house.features || []} />
                ))}
            </div>
        </>
    )
};

export default HouseList;
