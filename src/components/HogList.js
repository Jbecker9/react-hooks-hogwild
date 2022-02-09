import React from "react";
import Hogs from "./Hogs";

function HogList({ hogs, setSelected }){
    return (
        <div className="ui link cards">
            {hogs.map((hog)=>
                <Hogs key={hog.name} 
                hogName={hog.name} 
                hogImage={hog.image} 
                specialty={hog.specialty}
                isSelected={hog.isSelected}
                weight={hog.weight}
                greased={hog.greased}/>)}
        </div>
    )
}

export default HogList