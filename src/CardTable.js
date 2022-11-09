import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const CardTable = () => {
  const [deck, setDeck] = useState(null);

  const getDeck = async () => {
    try {
      const deckRes = await axios.get(
        "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
      );
      return setDeck(deckRes.data);
    } catch (e) {
      console.log("rejected request", e);
    }
  };

  useEffect(() => {
    getDeck();
  }, []);

  //const deckHandleClick = () => {
  //   // how to pass new deck to card
  //   getDeck();

  // };

  return (
    <div className="game-container">
      {/*<button onClick={deckHandleClick}>new deck</button>*/}
      {deck ? <Card deck={deck} /> : "wait for it"}
    </div>
  );
};

export default CardTable;

//catch error not working

//1 runs Card.js without data fetched
//2 runs useeffect() with getDeck in it, no data
