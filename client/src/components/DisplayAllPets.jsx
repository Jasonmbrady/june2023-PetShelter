import React from 'react';
import {Link} from "react-router-dom";

const DisplayAllPets = (props) => {
    // Display a list of all pets
    return(
        <div>
            <p>Placeholder for all pets</p>
            <p><Link to={"/newPet"}>Submit another pet</Link></p>
        </div>
    );
}
export default DisplayAllPets;