import React from 'react'
import "./styles/ItemListContainer.css"

const ItemListContainer = (props) => {
  
    return (
        
        <div className="list-container">
            {props.greeting}
        </div>
  )
}

export default ItemListContainer