import {useState, useEffect} from "react";
import axios from "axios";
import "./../css/House.css";
import HouseList from "../components/HouseList";

const Houses = () => {
    return (
        <main id="houses" className="main-content">
            <h2>Houses</h2>
            <HouseList num="9" />
        </main>
    )
};

export default Houses;