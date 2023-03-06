import React from 'react'

const pathImgUrl = require.context("/src/assets/img", true);

const Ad = () => {
  
  return (
    <div>
        <img className="page-header" src={pathImgUrl("./Nike-portrait.jpg") }/>
    </div>
  )
}

export default Ad;
