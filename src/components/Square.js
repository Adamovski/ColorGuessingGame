import React from "react"

function Square(props) {
    const style = {
        background: props.color
    }
    return (
        <div className="square" style={style} onClick={props.handleSquare}>

        </div>
    )
}

export default Square;