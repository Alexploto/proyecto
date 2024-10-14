

//Context para cards y carrito//
"use client";
import { createContext, useReducer, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { uptime } from "process";
import { cardsArray } from "@/Components/organismos/arrayCards";

export const CardContext = createContext();

const shoppingInitialState = {
  cardsArray: [],
  items: [],
};

function shoppingCartReducer(state, action) {
  // console.log(cardsArray);
  if (action.type === "ADD_ITEM") {
    const updatedItems = [...state.items];

    const existingCartItemIndex = updatedItems.findIndex(
      (cartItem) => cartItem.id === action.payload
    );
    const existingCartItem = updatedItems[existingCartItemIndex];

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = cardsArray.find(
        (product) => product.id === action.payload
      );
      updatedItems.push({
        id: action.payload,
        title: product.title,
        precio: product.precio,
        quantity: 1,
        imageUrl: product.imageUrl,
        description: product.description,
      });
    }

    return {
      ...state,
      items: updatedItems,
    };
  }

  if (action.type === "SET_ITEMS") {
    return {
      ...state,
      items: action.payload.items,
    };
  }

  if (action.type === "READ_STATE") {
    return {
      ...state,
      cardsArray: action.payload.cardsArray,
      // items: action.payload.items,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
}

export default function CardContextProvider({ children }) {
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    shoppingInitialState
  );
  const { cardsArray, items, currentPromo } = shoppingCartState;
  useEffect(() => {
    const hasItems =
      Array.isArray(shoppingCartState?.items) &&
      shoppingCartState?.items.length;

    if (hasItems) {
      console.log("Saving state in local storage");
      localStorage.setItem(
        "cartItemsState",
        JSON.stringify(shoppingCartState?.items)
      );
    }
  }, [shoppingCartState]);

  useEffect(() => {
    const notHasItems =
      Array.isArray(shoppingCartState?.items) &&
      !shoppingCartState?.items.length;

    if (notHasItems) {
      const state = localStorage.getItem("cartItemsState");
      const cartState = JSON.parse(state || "[]");
      if (state)
        shoppingCartDispatch({
          type: "SET_ITEMS",
          payload: {
            items: cartState,
          },
        });
    }
  }, []);

  const readState = async () => {
    const ENDPOINT = {
      cardsArray: "http://localhost:5000/cardsArray",
    };
    try {
      const responseProducts = await axios.get(ENDPOINT.cardsArray);
      const cardsList = await responseProducts.data;

      shoppingCartDispatch({
        type: "READ_STATE",
        payload: {
          cardsArray: cardsList,
        },
      });
    } catch (e) {
      console.log(e);
    }

    // console.log(productsList);
    // console.log(cartItems);

    // shoppingCartDispatch({
    //   type: "READ_STATE",
    //   payload: {
    //     cardsArray,
    //     items,
    //   },
    // });
  };

  useEffect(() => {
    readState();
  }, []);

  function handleAddItemToCart(id) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: id,
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        productId,
        amount,
      },
    });
  }

  function handleEmptyCart() {
    localStorage.setItem("cartItemsState", JSON.stringify([]));
    shoppingCartDispatch({
      type: "SET_ITEMS",
      payload: {
        items: [],
      },
    });
  }

  async function handleGetPromo() {
    const ENDPOINT = {
      promo: "http://localhost:9000/promo",
    };
    try {
      const responsePromo = await axios.get(ENDPOINT.promo);
      console.log("responsePromo", responsePromo);

      shoppingCartDispatch({
        type: "SET_PROMO",
        payload: {
          currentPromo: {},
        },
      });
    } catch (e) {
      console.log(e);
    }
  }

  const ctxValue = {
    items: items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    emptyCart: handleEmptyCart,
    getPromo: handleGetPromo,
    currentPromo,
  };
  // useEffect(() => {
  //   updateQuote(shoppingCartDispatch);
  // }, []);

  return (
    <CardContext.Provider value={ctxValue}>{children}</CardContext.Provider>
  );
}
