import "./../css/Dialog.css";

const HouseDetailsDialog = (props) => {
    const featureText = Array.isArray(props.features)
        ? props.features.join(", ")
        : props.features
            ? props.features
            : "No features listed";

    return (
        <>
            <div className="columns">
                <img src={"http://localhost:3001/images/"+props.main_image} alt="house" />
                <div id="dialog-content">
                    <h3>{props.name}</h3>
                    <p>{props.bedrooms} Bedrooms</p>
                    <p>{props.bathrooms} Bathrooms</p>
                    <p>Size: {props.size} sqft</p>
                    <p>Features: {featureText}</p>
                </div>
            </div>
            <div className="dialog-buttons">
                <button onClick={props.showEdit} style={{backgroundColor: '#2196F3'}}>Edit</button>
                <button onClick={props.showDelete} style={{backgroundColor: '#f44336'}}>Delete</button>
            </div>
        </>
    );
};

export default HouseDetailsDialog;

