import React from "react";
import Hogs from "./Hogs";

function HogList({ pigs }){
    return (

        <div className="ui link cards">
            {pigs.map((hog)=>
                <Hogs key={hog.name}
                hog={hog}
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