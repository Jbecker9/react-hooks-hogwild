import React from "react";
import Hogs from "./Hogs";

function HogList({ pigs }){
    
    function handleClick(data){
        const selected = data.isSelected
        const clickedHog = {...data, selected: !selected}
        console.log(clickedHog)
    }
    return (


        <div className="ui link cards">
            {pigs.map((hog)=>
                <Hogs 
                handleClick={handleClick}
                key={hog.name}
                hog={hog}
                hogName={hog.name} 
                hogImage={hog.image} 
                specialty={hog.specialty}
                isSelected={hog.isSelected}
                weight={hog.weight}
                greased={hog.greased}
                />)}
        </div>
    )
}

export default HogList