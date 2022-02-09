import React from "react";
import HogClickDisplay from "./HogClickDisplay";

function Hogs({ hogName, hogImage, specialty, isSelected, weight, greased, hog }){


    function handleClick(){
        const clickedHog = {...hog, isSelected: !isSelected}
        console.log(clickedHog)
    }
    
    return (
    <div key={hogName} id={hogName}className="card">
        <div key={hogName + "image"}className="image">
            <img src={hogImage} alt={hogName + "image"}/>
        </div>
        <div onClick={handleClick} key={hogName + "content"}className="content">
            <div key={hogName + "name"}className="header">{hogName}</div>
            {isSelected ? <HogClickDisplay specialty={specialty} weight={weight} greased={greased}/> : null}
        </div>
    </div>
    )
}

export default Hogs;