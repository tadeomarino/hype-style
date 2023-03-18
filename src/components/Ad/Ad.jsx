import React from "react";
import "./Ad.css"

const pathImgUrl = require.context("/src/assets/img/portrait", true);

const Ad = () => {
  return (
    <div>
      <img src={pathImgUrl("./Nike-portrait.jpg")} />
    </div>
  );
};

export default Ad;
