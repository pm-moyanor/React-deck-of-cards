import React, { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ deck }) => {
  const [activity, setActivity] = useState("");
  const [card, setCard] = useState("card");

const getCard = async()=> {
const res = await axios.get(`https://www.deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
setCard(res.data.cards[0])
}

  const getActivity = async () => {
    const res = await axios.get("http://www.boredapi.com/api/activity/");
    setActivity(res.data.activity)
    
  };
  const actHandleClick = () => {
    console.log("click")
    getActivity()
    
  };

const cardHandleClick=()=>{
    getCard()
}

  useEffect(() => {
    getActivity();
    getCard()
  }, []);

  const cardCode = card.code;
  const cardImg = card.image;

  console.log(activity);

  return (
    <div>
      <h3>{activity ? activity : "loading..."}</h3>
      <img src={card ? cardImg : 'image'}></img>
      <h3>{card ? cardCode : 'loading card' }</h3>

      <button onClick={actHandleClick}>new activity</button>

      <button onClick={cardHandleClick}>new card</button>
    </div>
  );
};

export default Card;
