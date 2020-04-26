import React, { useState, useEffect } from "react";
import Header from "./components/header"
import Stripe from "./components/stripe"
import Board from "./components/Board"
import RandomColor from "./components/RandomColor"
import "./Public/stylesheets/app.css"


function App() {
  const [numSquares, setNumSquares] = useState(3);
  const [colors, setColors] = useState(NewColors(numSquares))
  const [pickedColor, setPickedColor] = useState(pickColor())
  const [message, setMessage] = useState("Pick Color")

  useEffect(() => (setPickedColor(pickColor())));

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
  }

  const newGame = () => {
    setColors(NewColors(numSquares));

  }

  const handleSquare = i => {
    console.log("clicked")
    console.log(i.target.style.backgroundColor)
    if (i.target.style.backgroundColor === pickedColor) {
      setColors(Array(numSquares).fill(pickedColor));
      document.querySelector(".header").style.background = pickedColor;
    }
    else {
      i.target.style.backgroundColor = "#232323";
      setMessage("Correct!");
    }

  }

  const handleClick = i => {
    if (i.target.value === "easy") {
      setNumSquares(3)
      setColors(NewColors(3))
    }
    else if (i.target.value === "medium") {
      setNumSquares(6)
      setColors(NewColors(6))
    }
    else {
      setNumSquares(9)
      setColors(NewColors(9))
    }
  }

  return (
    <div>
      <Header pickedColor={pickedColor} />
      < Stripe onClick={handleClick} newGame={newGame} message={message} />
      <Board numSquares={numSquares} colors={colors} handleSquare={handleSquare} />
    </div>
  )

}

export default App

