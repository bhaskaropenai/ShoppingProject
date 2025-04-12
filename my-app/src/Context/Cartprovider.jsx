import React, { useReducer, useContext, createContext } from "react";
const cartContext = createContext();
function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      return [...cart, action.payload];
    }
    case "INCREASE_QTY": {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    }
    case "DECREASE_QTY": {
      return cart.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    }
    case "REMOVE_ITEM": {
      return cart.filter((item) => {
        return item.id !== action.payload.id;
      });
    }
  }
}
function Cartprovider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const AdditemTocart = (newcartItem) => {
    dispatch({ type: "ADD_ITEM", payload: newcartItem });
  };
  const increaseQty = (id) => {
    dispatch({ type: "INCREASE_QTY", payload: { id } });
    console.log("increses", id);
  };
  const decreaseQty = (id) => {
    dispatch({ type: "DECREASE_QTY", payload: { id: id } });
    console.log("decreased value");
  };
  const removeItemFromCart = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id: id } });
    console.log("removed");
  };
  return (
    <cartContext.Provider
      value={{
        cart,
        AdditemTocart,
        increaseQty,
        decreaseQty,
        removeItemFromCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}
export function useCart() {
  return useContext(cartContext);
}

export default Cartprovider;
