import React from "react";

function HogClickDisplay({ specialty, weight, greased }){
    return (
        <div className="extra content">
            <span className="left floated">
                {weight}
            </span>
            <span className="right floated">
                {greased ? "Greased" : "Not Greased"}
            </span>
        </div> 
    )
}

export default HogClickDisplay;