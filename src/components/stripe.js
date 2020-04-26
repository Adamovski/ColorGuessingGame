import React from "react"

function Stripe(props) {

    return (
        <div className="container">
            <div className="stripe">
                <button className="btn" id="reset" onClick={props.newGame}>New Colors</button>
                <span class="message">{props.message}</span>
                <div>
                    <button className="btn" onClick={props.onClick} value="easy">Easy</button>
                    <button className="btn" onClick={props.onClick} value="medium">Medium</button>
                    <button className="btn" onClick={props.onClick} value="hard">Hard</button>
                </div>
            </div>
        </div>
    )
}

export default Stripe