import React, { useState, useEffect } from "react";
import axios from "axios";

const CardTable2 = () => {
  const [card, setCard] = useState(null);
  const [deck, setDeck] = useState(null);

  const deckAPI = "https://www.deckofcardsapi.com/api/deck/new/";
  const cardAPI = `https://www.deckofcardsapi.com/api/deck/${deck}/draw/?count=1`;

  useEffect(() => {
    const getDeckData = async () => {
      let res = await axios.get(deckAPI); //this await not working??
      setDeck(res.data.deck_id)
   
    };

    getDeckData();
  }, []);

  console.log(deck, card);

  const handleClick = () => {
    console.log("clicked");
    //getCardData()
  };

  return (
    <div className="game-container">
      <h2>{card}</h2>
      <button onClick={handleClick}>hit me!</button>
    </div>
  );
};
//{card ? card : "loading..."}

// const getCards = async () => {
//   try {
//     const getDeck = await axios.get(DeckAPI);
//     console.log(getDeck)
//     setDeck(getDeck.data.deck_id);

//     const getCard = await axios.get(cardAPI);
//     console.log(getCard);
//     setCard(getCard);
//   } catch (e) {
//     console.log("ERROR!!", e);
//   }
// };

// getCards();
export default CardTable2;
