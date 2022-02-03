import React from "react";
import Hogs from "./Hogs";

function HogList({ hogs }){
    return (
        <div className="ui link cards">
            {hogs.map((hog)=>
                <Hogs key={hog.name} hogName={hog.name} 
                hogImage={hog.image} specialty={hog.specialty}/>)}
        </div>
    )
}

export default HogList