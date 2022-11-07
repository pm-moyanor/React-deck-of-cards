import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

const CardTable = () => {
  const [card, setCard] = useState("card");


  useEffect(() => {
    axios
      .get("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((response) => {
        return axios.get(
          `https://www.deckofcardsapi.com/api/deck/${response.data.deck_id}/draw/?count=1`
        );
      })
      .then((response) => {
        setCard(response.data.cards[0]);
      });
  }, []);

  const cardCode = card.code;
  const cardImg = card.image;

  const handleClick=()=>{
    console.log("click")
  }


  return (
    <div className="game-container">
      <button className="btn" onClick={handleClick}>hit me!</button>

      <img className="card-img" src={cardImg}></img>
    </div>
  );
};

export default CardTable;
