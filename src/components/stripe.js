import React from "react"

function Stripe() {
    return (
        <div className="container">
            <div className="stripe">
                <button className="btn" id="reset">New Colors</button>
                <span id="message">PlaceHolder</span>
                <div>
                    <button className="btn mode">Easy</button>
                    <button className="btn mode selected">Hard</button>
                </div>
            </div>
        </div>
    )
}

export default Stripe