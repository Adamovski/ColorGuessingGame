import React from "react"

function Header(props) {
    return (
        < header className="title" >
            <h1>The great<span className="header-color">{props.pickedColor}</span>colour game</h1>
        </header >
    )
}

export default Header