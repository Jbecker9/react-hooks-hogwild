import React from "react";
import HogClickDisplay from "./HogClickDisplay";

function Hogs({ hogName, hogImage, specialty, isSelected, setSelected, weight, greased }){
    function renderSpecialty(event){
        setSelected(null)
        const selectedCard = document.getElementById(event.target.parentNode.parentNode.id).id
        setSelected(selectedCard)
        console.log(isSelected)
    }
    
    return (
    <div key={hogName} id={hogName}className="card" onClick={(event) => renderSpecialty(event)}>
        <div key={hogName + "image"}className="image">
            <img src={hogImage} alt={hogName + "image"}/>
        </div>
        <div key={hogName + "content"}className="content">
            <div key={hogName + "name"}className="header">{hogName}</div>
            {isSelected ? <HogClickDisplay specialty={specialty} weight={weight} greased={greased}/> : null}
        </div>
    </div>
    )
}

export default Hogs;