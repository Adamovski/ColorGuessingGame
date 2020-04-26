import React, { useState } from "react"
import Square from "./Square"


function Board(props) {
    {
        let squares = []
        for (let i = 0; i < props.numSquares; i++) {
            squares.push(<Square handleSquare={props.handleSquare} key={i} color={props.colors[i]} />)
        }

        return (
            <div className="main-grid">
                {squares}
            </div>
        )
    }
}

export default Board