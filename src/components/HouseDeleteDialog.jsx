import "./../css/Dialog.css";
import React, {useState} from "react";

const HouseDeleteDialog = (props) => {
    const [result, setResult] = useState("");

    const deleteFromServer = async(e) => {
        e.preventDefault();
        setResult("Deleting...");

        const response = await fetch(`http://localhost:3001/api/houses/${props._id}`, {
            "method":"DELETE"
        });

        if(response.status == 200){
            setResult("House deleted successfully");
            setTimeout(() => {
                props.hideHouse();
                props.closeDeleteDialog();
            }, 500);
        } else {
            setResult("Error deleting house");
        }
    };

    return (
        <>
            <h3>Delete Property</h3>
            <p>Are you sure you want to delete "{props.name}"?</p>
            <p>This action cannot be undone.</p>
            <div className="dialog-buttons">
                <button onClick={deleteFromServer}>Yes, Delete</button>
                <button onClick={props.closeDeleteDialog}>Cancel</button>
            </div>
            <p>{result}</p>
        </>
    );
};

export default HouseDeleteDialog;

