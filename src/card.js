import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ deck, handleClick }) => {
  const [card, setCard] = useState("");


  useEffect(() => {
    async function fetchCard() {
        console.log(deck)
      const myCard = await axios.get(
        `https://www.deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`
      );
      setCard(myCard.data.cards[0]);
    }

    fetchCard();
  }, []);

  console.log('after card fetch')

  return (
    <div>
      <h3>{card ? card.code : "loading..."}</h3>
      <img src={card.image}></img>
      <button onClick={handleClick}>gimme</button>
    </div>
  );
};

export default Card;
