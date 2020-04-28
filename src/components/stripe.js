import React from "react"

function removeClick() {
    const nav = document.querySelector("nav");
    nav.classList.remove("levels-open")
}
function addClick() {
    const nav = document.querySelector("nav");
    nav.classList.add("levels-open")
}

function Stripe(props) {

    return (
        <header className="stripe">
            <div className="stripe-content">
                <button className="btn" id="reset" onClick={props.newGame}>New Colors</button>
                <span className="message">{props.message}</span>
                <button onClick={addClick} area-label="OpenNavigation" className="btn open-levels">&#9776;</button>

                <nav className="levels">
                    <button onClick={removeClick} area-label="Close Navigation" className="btn close-levels">&times;</button>
                    <ol className="levels-list">
                        <li className="btn levels-item" onClick={i => { props.handleClick(i); removeClick() }} value="easy" >Easy</li>
                        <li className="btn levels-item" onClick={i => { props.handleClick(i); removeClick() }} value="medium">Medium</li>
                        <li className="btn levels-item" onClick={i => { props.handleClick(i); removeClick() }} value="hard">Hard</li>
                    </ol>
                </nav>
            </div>
        </header>
    )
}

export default Stripe
