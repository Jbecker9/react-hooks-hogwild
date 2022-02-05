import React from "react";

function Hogs({ hogName, hogImage, specialty, isSelected, setSelected }){
    function renderSpecialty(event){
        const selectedContent = event.target.parentNode.parentNode.querySelector(".content") 
        setSelected(!isSelected)
        
        
        // const queryDescArray = selectedContent.querySelectorAll(".description")
        // const specialtyElement = document.createElement("div")
        //     specialtyElement.className = "description"
        //     specialtyElement.innerText = specialty
        //     specialtyElement.key = `${hogName} description`
        //     // event.target.parentNode.parentNode.querySelector(".description")
        // console.log(selectedContent.querySelectorAll(".description"))
        // selectedContent.appendChild(specialtyElement)
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