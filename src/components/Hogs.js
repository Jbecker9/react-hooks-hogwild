import React from "react";

function Hogs({ hogName, hogImage, specialty}){
    function renderSpecialty(event){
        const selectedContent = event.target.parentNode.parentNode.querySelector(".content")
        const specialtyElement = document.createElement("div")
            specialtyElement.className = "description"
            specialtyElement.innerText = specialty
            specialtyElement.key = `${hogName} description`
        // console.log(selectedContent)
        selectedContent.appendChild(specialtyElement)
    }
    
    return (
    <div key={hogName} className="card" onClick={(event) => renderSpecialty(event)}>
        <div key={hogName + "image"}className="image">
            <img src={hogImage} alt={hogName + "image"}/>
        </div>
        <div key={hogName + "content"}className="content">
            <div key={hogName + "name"}className="header">{hogName}</div>
        </div>
    </div>
    )
}

export default Hogs;