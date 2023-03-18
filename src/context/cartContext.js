import React, { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = (props) => {
  
  const [cartItems, setCartItems] = useState([]);

  const clearCart = () => {
    setCartItems([]);
  };

  const isInCart = (id) => {
    return cartItems.find((item) => item.id === id) ? true : false;
  };

  const removeProduct = (id, quantity) => {
    const existingCartItemIndex = cartItems.findIndex((item) => item.id === id);
    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      if (existingCartItem.quantity > quantity) {
        const updatedCartItems = [...cartItems];
        updatedCartItems[existingCartItemIndex].quantity -= quantity;
        setCartItems(updatedCartItems);
      } else {
        const filteredCartItems = cartItems.filter((item) => item.id !== id);
        setCartItems(filteredCartItems);
      }
    }
  };

  const addProduct = (product, quantity) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );
    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += quantity;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
  };

  const exitProduct = (id) => {
    const filteredCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(filteredCartItems);
  };

  const getTotalQuantity = () => {
    let cant = 0;
    cartItems.forEach((e) => (cant += e.quantity));
    return cant;
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addProduct,
        removeProduct,
        clearCart,
        isInCart,
        getTotalQuantity,
        exitProduct,
      }}
    >
      {/* props.children hace referencia a los componentes hijos que se van a renderizar dentro del proveedor de contexto CartContext.Provider. */}
      {props.children}
    </CartContext.Provider>
  );
};

export { CartProvider };
export default CartContext;
