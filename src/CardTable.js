import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

const CardTable = () => {
  const [deck, setDeck] = useState("deck");
 

  const fetchDeck =async()=> {
   
      const deckRes =  await  axios
      .get("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      setDeck(deckRes.data.deck_id)
 

    

 
  }

  useEffect(() => {
    try{
      fetchDeck()
    }catch(e){
      console.log('rejected request',e)
    }
   
   // axios
   //   .get("https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1") // useref this??
   //   .then((response) => {
   //     return axios.get(
      //     `https://www.deckofcardsapi.com/api/deck/${response.data.deck_id}/draw/?count=1`
      //   );
      // })
      // .then((response) => {
      //   setCard(response.data.cards[0]);
      // });
  }, []);


  console.log(deck)

  // const cardCode = card.code;
  // const cardImg = card.image;
// put the click as a dependency in useeffect? evry time clicks useeffect rerenders
//how to separate deck from card // review apis


  return (
    <div className="game-container">
     <Card deck={deck}  />
     

      <img className="card-img" ></img>
    </div>
  );
};

export default CardTable;
