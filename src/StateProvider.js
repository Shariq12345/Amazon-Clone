import React, { createContext, useContext, useReducer } from "react";

// Preapares the dataLayer
export const StateContext = createContext();

// Wrap our App
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull Info from the data layer
export const useStateValue = () => useContext(StateContext);
