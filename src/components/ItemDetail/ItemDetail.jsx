import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const pathImgUrl = require.context("../../assets/img", true)

const ItemDetail = ({product = {}}) => {

  const handleOnAdd = (value) =>{
    console.log(`se agrego ${value}`);
}

  return (
    
    <div>
        <div>
            <img src={pathImgUrl(`./${product.imgUrl}`)} alt={product.name} />
            <h1>{product.name}</h1>
            <p>Description: {product.description}</p>
            <p>$ {product.price}</p>
            <p>Stock disponible: {product.stock}</p>
        </div>
        <ItemCount onAdd = {handleOnAdd} stock = {product.stock} initial = {1}/>
    </div>
  )
}

export default ItemDetail