import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./card";

const CardTable = () => {
  const [deck, setDeck] = useState(null);
  const [card, setCard] = useState("");

  useEffect(() => {
    async function fetchDeck() {
      try {
        const res = await axios.get(
          "https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1"
        );

        setDeck(res.data.deck_id)

  
      } catch (err) {
        console.log("error", err);
      }


    }


    const cardFetch = axios.get(
      `https://www.deckofcardsapi.com/api/deck/${deck}/draw/?count=1`
    );
    setCard(cardFetch.data)

console.log(cardFetch.data)
    fetchDeck()

    
  }, []);



//   useEffect(()=>{
//     async function fetchCard () {
//       const res = axios.get(
//         `https://www.deckofcardsapi.com/api/deck/${deck.data.deck_id}/draw/?count=1`
//       );
// //setCard(res.data)
// console.log(res.data)
//     };

//     fetchCard()
//   },[])

return(
  <div>
    <h4>{card}</h4>
  </div>
 )
};

// console.log("after card fetch");
// console.log(deck, card);
// const handleClick = () => {
//   console.log("clicked");
// };

// return (
//   <div>
//     {/*<Card deck={deck} handleClick={handleClick} />*/}

//     <div>
//       <h3>{card ? card.code : "loading..."}</h3>
//       <img src={card.image}></img>
//       <button onClick={handleClick}>gimme</button>
//     </div>
//   </div>



export default CardTable;
