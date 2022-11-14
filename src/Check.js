import React, { useEffect, useState } from "react";
import axios from "axios";

const Check = ({ card , newGame, setCard}) => {
  if (card.remaining <= 0) {
    alert("no more cards");
  
  } else if (card === "start") {
    return (
      <img
        id="start-card"
        src="./cardback01.png"
        style={{ height: "300px" }}
      ></img>
    );
  } else if (card.remaining) {
    return <img src={card.cards[0].image} style={{ height: "300px" }}></img>;
  }
};

export default Check;
