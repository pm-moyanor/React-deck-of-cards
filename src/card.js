import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ deck }) => {

  const [card, setCard] = useState("");



  const getCard = async () => {
    const res = await axios.get(
      `https://www.deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`
    );
    setCard(res.data);
 
   

  };

  useEffect(() => {
    getCard();
  
  }, []);

  
  const cardHandleClick = () => {
    
    getCard();

    
  };

  //  const keepDrawing = () => {
  //     setInterval(()=>{
  //     getCard()
  //     },1000)
  //   }

  //   useEffect(() => {
  //     keepDrawing();
  //   }, []);

// const cardCode = card.cards[0].code;
 const cardImg = card.cards[0].image;
 const cardRem = card.remaining
 console.log(cardRem);

  return (
    <div className="card-box">
        {cardRem > 0 ?  <img src={cardImg}></img> : alert('no more cards in deck')}

      <button onClick={cardHandleClick}>new card</button>
      <button>keep'em coming</button>
    </div>
  );
};

export default Card;

// good practice React?
//first fetch throws error, onclick (requests a card frim a deck-id )works
