import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ deck }) => {
  const [card, setCard] = useState(null);
  const [draw, setDraw] = useState(false);
  const [intervalId, setIntervalId] = useState(false);
  const cardAPI = `https://www.deckofcardsapi.com/api/deck/${deck}/draw/?count=1`;

  const getCard = async () => {
    const res = await axios.get(cardAPI);
    setCard(res.data);
  };

  const toggleDraw = () => {
    setDraw(!draw);
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
    }, 500);
    setIntervalId(newIntervalId);
  };

  const resetGame = () => {};

  //   const check = () => {
  //     if (card.remaining > 0) {
  //         console.log(card.remaining)
  //         handleClick()

  //     } else {
  //         alert("no more cards in deck");
  //     }
  //  };

  return (
    <div className="card-box">
      {card ? (
        <img src={card.cards[0].image} style={{ height: "300px" }}></img>
      ) : (
        <img src="./cardback01.png" style={{ height: "300px" }}></img>
      )}

      <button onClick={cardHandleClick}>new card</button>
      <button onClick={handleClick}>
        {!intervalId ? "keep'em coming" : "stop"}
      </button>
    </div>
  );
};
//fix end function // make restart and new deck logic

export default Card;
