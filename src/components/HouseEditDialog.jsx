import "./../css/Dialog.css";
import React, {useState, useEffect} from "react";

const HouseEditDialog = (props) => {
    const [result, setResult] = useState("");
    const [prevSrc, setPrevSrc] = useState("");
    const [formData, setFormData] = useState({
        name: props.name,
        size: props.size,
        bedrooms: props.bedrooms,
        bathrooms: props.bathrooms
    });

    useEffect(() => {
        setFormData({
            name: props.name,
            size: props.size,
            bedrooms: props.bedrooms,
            bathrooms: props.bathrooms
        });
        setPrevSrc("http://localhost:3001/images/"+props.main_image);
    }, [props]);

    const uploadImage = (event) => {
        if (event.target.files && event.target.files[0]) {
            setPrevSrc(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const updateToServer = async(event) => {
        event.preventDefault();
        setResult("Updating...");

        const formDataToSend = new FormData();
        formDataToSend.append("name", formData.name);
        formDataToSend.append("size", formData.size);
        formDataToSend.append("bedrooms", formData.bedrooms);
        formDataToSend.append("bathrooms", formData.bathrooms);
        
        const imageInput = event.target.querySelector('input[type="file"]');
        if (imageInput && imageInput.files[0]) {
            formDataToSend.append("img", imageInput.files[0]);
        }
        
        const response = await fetch(`http://localhost:3001/api/houses/${props._id}`, {
            "method":"PUT",
            "body":formDataToSend
        });

        if(response.status == 200){
            const updatedHouse = await response.json();
            setResult("House updated successfully");
            setTimeout(() => {
                props.updateHouse(updatedHouse);
                props.closeEditDialog();
            }, 500);
        } else {
            setResult("Error updating house");
        }
    };

    return (
        <>
            <form id="edit-property-form" onSubmit={updateToServer}>
                <h3>Edit Property</h3>

                <p>
                    <label htmlFor="name">Property Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                        minLength="3" />
                </p>

                <p>
                    <label htmlFor="size">Size:</label>
                    <input 
                        type="number" 
                        id="size" 
                        name="size" 
                        value={formData.size}
                        onChange={handleChange}
                        min="0" 
                        required />
                </p>

                <p>
                    <label htmlFor="bedrooms">Bedrooms:</label>
                    <input 
                        type="number" 
                        id="bedrooms" 
                        name="bedrooms" 
                        value={formData.bedrooms}
                        onChange={handleChange}
                        min="0" 
                        required />
                </p>

                <p>
                    <label htmlFor="bathrooms">Bathrooms:</label>
                    <input 
                        type="number" 
                        id="bathrooms" 
                        name="bathrooms" 
                        value={formData.bathrooms}
                        onChange={handleChange}
                        min="0" 
                        required />
                </p>

                <section className="columns">
                    <div>
                        <p id="img-prev-section">
                            {prevSrc!=""?
                            (<img id="img-prev" src={prevSrc} alt="preview"></img>):
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
                    <button type="submit">Update</button>
                </p>
                <p>{result}</p>
            </form>
        </>
    );
};

export default HouseEditDialog;

