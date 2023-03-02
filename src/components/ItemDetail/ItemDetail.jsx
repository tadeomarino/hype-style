import React from 'react'

const ItemDetail = ({img, name, category, price, description, stock}) => {

  return (
    
    <div>
        <div>
            <img src={img} alt={name} />
        </div>
    </div>
  )
}

export default ItemDetail