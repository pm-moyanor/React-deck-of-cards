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

  useEffect(() => {
    getCard();
  }, [draw]);

  const cardHandleClick = () => {
    getCard();
    console.log(card)
  };


  const handleClick = () => {
    if(intervalId) {
      clearInterval(intervalId);
      setIntervalId();
      return;
    }
  
    const newIntervalId = setInterval(() => {
    getCard()
    }, 500);
    setIntervalId(newIntervalId);
  }

const resetGame = () =>{
    alert("no more cards in deck")
}

const check=()=>{
    if(card){
        console.log(card)
     if ( card.remaining > 0 ) {
        handleClick() 
    }else{resetGame()} 
    
    }
   return
}
  return (
    <div className="card-box">
      {card ? <img src={card.cards[0].image}></img> : undefined}

      <button onClick={cardHandleClick}>new card</button>
      <button onClick={check}>{ !intervalId ? "keep'em coming" : "stop"}</button>
    </div>
  );
};
//fix end function // make restart and new deck logic
//  card.remaining > 0 ?  :  alert("no more cards in deck")
export default Card;
