import "./../css/Dialog.css";
import React, { useState } from "react";
import HouseDetailsDialog from "./HouseDetailsDialog";
import HouseEditDialog from "./HouseEditDialog";
import HouseDeleteDialog from "./HouseDeleteDialog";

const HouseDialog = (props) => {
    const [showContent, setShowContent] = useState("details");

    const showEdit = (e) => {
        e.preventDefault();
        setShowContent("edit");
    }

    const showDelete = (e) => {
        e.preventDefault();
        setShowContent("delete");
    }

    return (
        <div id="house-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeHouseDialog}
                    >
                        &times;
                    </span>
                    <div id="house-dialog-content">
                        {showContent==="details"?(
                            <HouseDetailsDialog 
                                showEdit={showEdit}
                                showDelete={showDelete} 
                                name={props.name}
                                bedrooms={props.bedrooms}
                                size={props.size}
                                bathrooms={props.bathrooms}
                                main_image={props.main_image}
                                features={props.features}/>
                        ):showContent === "edit"?(
                            <HouseEditDialog 
                                _id={props._id}
                                name={props.name}
                                size={props.size}
                                main_image={props.main_image}
                                bedrooms={props.bedrooms}
                                bathrooms={props.bathrooms}
                                closeEditDialog = {props.closeHouseDialog}
                                updateHouse={props.updateHouse} />
                        ):(
                            <HouseDeleteDialog 
                                _id={props._id}
                                name={props.name}
                                closeDeleteDialog = {props.closeHouseDialog}
                                hideHouse={props.hideHouse} />
                            )}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseDialog;
