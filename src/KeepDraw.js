import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";

const KeepDraw = () => {
  const [draw, setDraw] = useState(false);

  const drawing = () => {
    setInterval(() => {
      setDraw(!draw);
    }, 1000);
  };

  useEffect(() => {

   
  }, []);

  const toggleDraw = ()=>{
    setDraw(!draw)
  
  }

  console.log(draw)

    return(
    <div>
      <button onClick={toggleDraw}>draw!</button>
    
    </div>
    )
};

export default KeepDraw;
