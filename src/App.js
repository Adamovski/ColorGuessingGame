import React, { useState, useEffect } from "react"
import Header from "./components/Header"
import Stripe from "./components/Stripe"
import Board from "./components/Board"
import RandomColor from "./helpers/RandomColor"

function App() {

  const [numSquares, setNumSquares] = useState(3);
  const [colors, setColors] = useState(NewColors(numSquares));
  const [pickedColor, setPickedColor] = useState(pickColor());
  const [message, setMessage] = useState("Pick a Colour");

  useEffect(() => {
    setPickedColor(pickColor())
  });

  function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
  };

  function NewColors(num) {
    let arr = []
    for (let i = 0; i < num; i++) {
      arr.push(RandomColor());
    }
    return arr;
  };

  const newGame = () => {
    setColors(NewColors(numSquares));
    setMessage("Pick a Colour");
  };

  const handleSquare = i => {
    console.log("clicked")
    console.log(i.target.style.backgroundColor)
    if (i.target.style.backgroundColor === pickedColor) {
      setColors(Array(numSquares).fill(pickedColor));
      document.querySelector(".title").style.background = pickedColor;
      setMessage("Correct!");
    }
    else {
      i.target.style.backgroundColor = "#0d0104";
    }

  };

  const handleClick = i => {
    if (i.target.innerHTML === "Easy") {
      setNumSquares(3)
      setColors(NewColors(3))
      setMessage("Pick a Colour");
    }
    else if (i.target.innerHTML === "Medium") {
      setNumSquares(6)
      setColors(NewColors(6))
      setMessage("Pick a Colour");
    }
    else {
      setNumSquares(9)
      setColors(NewColors(9))
      setMessage("Pick a Colour");
    }
    console.log(i.target.value)
  };

  return (
    <div>
      <Header pickedColor={pickedColor} />
      <Stripe handleClick={handleClick} newGame={newGame} message={message} />
      <Board numSquares={numSquares} colors={colors} handleSquare={handleSquare} />
    </div>
  )

}

export default App

