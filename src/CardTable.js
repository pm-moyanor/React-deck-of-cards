import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

const CardTable = () => {
  const [deck, setDeck] = useState("deck");
  const [card, setCard] = useState("card");

  useEffect(() => {
    // axios
    //   .get("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
    //   .then((res) => res = res.data.deck_id
      
    //   )
    //   .then(
    //     axios
    //       .get(`https://www.deckofcardsapi.com/api/deck/${deck}/draw/?count=1`)
    //       .then((res) => console.log(res))
    //   );


    axios.get("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then((response) => {
    return axios.get(`https://www.deckofcardsapi.com/api/deck/${response.data.deck_id}/draw/?count=1`); // using response.data
  })
  .then((response) => {
 
    setCard(response.data.cards[0])

    
  });


  }, []);

const cardCode = card.code
const cardImg = card.image
  

 console.log(card)

  return (
    <div className="game-container" >
      <button className="btn">hit me!</button>
     
      <img classname="card-img" src={cardImg}></img>
    
     
    </div>
  );
};

export default CardTable;
