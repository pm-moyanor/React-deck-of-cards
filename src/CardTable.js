import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Check from "./Check";

const CardTable = () => {
  const [deck, setDeck] = useState(null);

  const deckAPI =
    "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

  const getDeckData = async () => {
    let res = await axios.get(deckAPI);
    setDeck(res.data);
 
  };

  useEffect(() => {
    getDeckData();
  }, []);



  return (
    <div className="game-container">
      {/*<button onClick={deckHandleClick}>new deck</button>*/}
      {deck ? <Card deck={deck} getDeckData={getDeckData} /> : undefined}
    </div>
  );
};

export default CardTable;

//catch error not working

//1 runs Card.js without data fetched
//2 runs useeffect() with getDeck in it, no data => 'wait for it'
//3
