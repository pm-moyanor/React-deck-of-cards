import React, { useEffect, useState } from "react";
import axios from "axios";

const CardTable = () => {
  const [card, setCard] = useState("");

  useEffect(() => {
    async function fetchData() {
      let deck = await axios.get('https://www.deckofcardsapi.com/api/deck/new/')
      let oneCard = await axios.get(
        "https://www.deckofcardsapi.com/api/deck/ibft3ikg7kuj/draw/?count=1"
      );
      //const tryMe = oneCard.data.cards[0].image
      return oneCard;
    }
    setCard(fetchData());
  }, []);
  

  return (
    <div>
      <div></div>
      <img src={card}></img>
      <button>gimme a card</button>
    </div>
  );
};

export default CardTable;
