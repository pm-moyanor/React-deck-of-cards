import React, { useEffect, useState } from "react";
import axios from "axios";
import Check from "./Check";

const Card = ({ deck, getDeckData }) => {
  const [card, setCard] = useState("start");
  const [draw, setDraw] = useState(false);
  const [intervalId, setIntervalId] = useState(false);
  const cardAPI = `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`;

  const getCard = async () => {
    const res = await axios.get(cardAPI);
    setCard(res.data);
 
  };

//   const toggleDraw = () => {
//     setDraw(!draw);
//   };
const newGame = () => {
    getDeckData();
  console.log(deck.deck_id,card)
    setCard('start')
  };

  //   useEffect(() => {
  //     getCard();
  //   }, [draw]);

  const cardHandleClick = () => {
    getCard();
  };

  const handleClick = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId();
      return;
    }

    const newIntervalId = setInterval(() => {
      getCard();
    }, 200);
    setIntervalId(newIntervalId);
  };
console.log(card.remaining)
  return (
    <div className="card-box">
     < Check card={card} newGame={newGame} setCard={setCard}/>

      <button onClick={cardHandleClick}>new card</button>
      <button onClick={handleClick}>
        {!intervalId ? "keep'em coming" : "stop"}
      </button>
      <button onClick={newGame}>new game</button>
    </div>
  );
};
//fix end function // make restart and new deck logic

//
//)}
export default Card;
