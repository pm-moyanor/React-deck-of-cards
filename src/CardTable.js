import React, { useEffect, useState } from "react";
import axios from "axios";

const CardTable = () => {
  const [card, setCard] = useState("");
let newActivity;

  useEffect(() => {
    
    
     axios.get(
        "https://www.boredapi.com/api/activity/"
      ).then(res => console.log(res.data.activity));
      //console.log(newActivity.data.activity);
    setCard(newActivity.data.activity);
    
    //getActivity()

   
  }, []);

  // async function getPlanet (){
  //   return await axios.get("https://swapi.co/api/planets/1/")
  // }
  // getPlanet()

  // useEffect(() => {
  //   async function fetchData() {
  //     let deck = await axios.get('https://www.deckofcardsapi.com/api/deck/new/')
  //     let oneCard = await axios.get(
  //       "https://www.deckofcardsapi.com/api/deck/ibft3ikg7kuj/draw/?count=1"
  //     );
  //     //const tryMe = oneCard.data.cards[0].image
  //     return oneCard;
  //   }
  //   setCard(fetchData());
  // }, []);

  return (
    <div>
      <div></div>

      <h3>{card ? card : "loading..."}</h3>
      <button  >gimme a card</button>
    </div>
  );
};

export default CardTable;
