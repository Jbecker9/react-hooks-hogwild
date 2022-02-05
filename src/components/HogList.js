import React from "react";
import Hogs from "./Hogs";

function HogList({ hogs, isSelected, setSelected }){
    return (
        <div className="ui link cards">
            {hogs.map((hog)=>
                <Hogs key={hog.name} 
                hogName={hog.name} 
                hogImage={hog.image} 
                specialty={hog.specialty}
                isSelected={isSelected}
                setSelected={setSelected}/>)}
        </div>
    )
}

export default HogList