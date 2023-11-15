import React, { createContext, useReducer, useContext, useEffect } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.find((item) => item.id === action.item.id);
      if (existingItem) {
        return state.map((item) =>
          item.id === action.item.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...state, { ...action.item, quantity: 1 }];
      }

    case "REMOVE_FROM_CART":
      return state.filter((item) => item.id !== action.itemId);

    case "DECREMENT_QUANTITY":
      const itemToDecrement = state.find((item) => item.id === action.item.id);
      if (itemToDecrement) {
        return state.map((item) =>
          item.id === action.item.id
            ? {
                ...item,
                quantity: item.quantity > 1 ? item.quantity - 1 : 1,
              }
            : item
        );
      } else {
        return state;
      }

    default:
      return state;
  }
}

export function CartContextProvider({ children }) {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, dispatch] = useReducer(cartReducer, storedCart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
