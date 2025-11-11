import "../css/Dialog.css";
import React, {useState} from "react";

const AddHousePlan = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");

    const uploadImage = (event) => {
        setPrevSrc(URL.createObjectURL(event.target.files[0]));
    };

    const addToServer = async(event) => {
        event.preventDefault(); //stops us from going to another page or refreshing
        setResult("Sending...");

        const formData = new FormData(event.target);
        console.log(...formData);
        
        const response = await fetch("http://localhost:3001/api/houses", {
            "method":"POST",
            "body":formData
        });

        if(response.status == 200){
            setResult("House plan added successfully");
            event.target.reset();
            props.closeAddDialog();
            props.updateHouses(await response.json());
        } else {
            setResult("Error adding house");
        }
    };

    return (
        <div id="add-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span id="dialog-close" className="w3-button w3-display-topright" onClick={props.closeAddDialog}>&times;</span>
                    <form id="add-property-form" onSubmit={addToServer}>
                        <h3>Create New Property</h3>

                        <p>
                            <label htmlFor="name">Property Name:</label>
                            <input type="text" id="name" name="name" required min="3"></input>
                        </p>

                        <p>
                            <label htmlFor="size">Size:</label>
                            <input type="number" id="size" name="size" min="0" required></input>
                        </p>

                        <p>
                            <label htmlFor="bedrooms">Bedrooms:</label>
                            <input type="number" id="bedrooms" name="bedrooms" min="0" required></input>
                        </p>

                        <p>
                            <label htmlFor="bathrooms">Bathrooms:</label>
                            <input type="number" id="bathrooms" name="bathrooms" min="0" required></input>
                        </p>

                        <section className="columns">
                            <div>
                                <p id="img-prev-section">
                                    {prevSrc!=""?
                                    (<img id="img-prev" src={prevSrc}></img>):
                                    ("")
                                    }
                                </p>
                            </div>
                            <p id="img-upload">
                                <label htmlFor="img">Upload Image:</label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={uploadImage} />
                            </p>
                        </section>

                        <p>
                            <button type="submit">Submit</button>
                        </p>
                        <p>{result}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddHousePlan;
