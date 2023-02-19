import React, { useState } from 'react'

function ItemCount({initial, stock, onAdd}) {
    
    const [count, setCount] = useState(initial)

    const handleIncrement = () => {
        if (count < stock){
            setCount(count + 1)
        }
    };

    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    };

    const handleAdd = () => {
        if (count) {
            onAdd(count)
        }
    }

    
    return(
        <div style={{padding: 10, textAlign: 'center'}}>
            
            <div style={{padding: 10,}}>
                
                <button onClick={handleAdd}>
                    Agregar al carrito</button>
            </div>
            
            <div style={{alignContent: 'flex-start'}}>
                
                <button onClick={handleIncrement}>+</button>
                
                <p>Tienes {count} ítems</p>
                
                <button onClick={handleDecrement}>-</button>
            
            </div>
        </div>
    )
}


export default ItemCount