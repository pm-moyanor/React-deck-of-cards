import React, { useState, useEffect } from "react";
import axios from "axios";

const Activity = () => {
  const [activity, setActivity] = useState("");

  const getActivity = async () => {
    const res = await axios.get("http://www.boredapi.com/api/activity/");
    setActivity(res.data.activity);
  };

  useEffect(() => {
    getActivity();
  }, []);
  const actHandleClick = () => {
    console.log("click");
    getActivity();
  };

  return (
    <div className="activity-box">
      <h3>{activity ? activity : "loading..."}</h3>
      <button onClick={actHandleClick}>new activity</button>
    </div>
  );
};

export default Activity;
