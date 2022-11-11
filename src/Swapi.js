import React, { useState, useEffect } from "react";
import axios from "axios";

const Swapi = () => {
  const [planet, setPlanet] = useState(null);
  const [person, setPerson] = useState(null);

  const baseURL = "https://swapi.dev/api/films/1/";
  const swapiNest = "https://swapi.dev/api/people/1/";

  useEffect(() => {
   
     axios.get(baseURL)
     .then(res => {
        return axios.get(res.data.planets[0])
     })
     .then(res => {
        console.log(res.data)
        return axios.get(res.data.residents[1])
     })
     .then(res =>console.log(res.data))
   
  }, []);

//   return (
//     <div>
//         <h4>{planet ? planet.data.title : console.log("no planets")}</h4>
//       <h4>{person ? person.data.name : console.log("no person")}</h4>
//     </div>
//   );
};
export default Swapi;
