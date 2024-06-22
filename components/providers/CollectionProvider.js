"use client"
import React, { createContext, useReducer, useContext, useEffect, useState } from 'react';
import { useAccount } from 'wagmi';

// Initial state
const initialState = {
  collectionId: "",
  contractAddress: "",
  loading: false,
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_COLLECTION_ID':
      return { ...state, collectionId: action.payload };
    case 'SET_CONTRACT_ADDRESS':
      return { ...state, contractAddress: action.payload };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'LOAD':
      if (action.payload.loading) {
        return { ...initialState }
      }
      return { ...action.payload, loading: false }
    case 'RESET':
      return { ...initialState }
    default:
      return state;
  }
};

// Create context
const CollectionContext = createContext();

// Custom hook to use the CollectionContext
export const useCollection = () => useContext(CollectionContext);

// Store provider component
export const CollectionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { address, isConnected } = useAccount()
  const [ loadedAddress, setLoadedAddress ] = useState("")

  // useEffect(() => {
  //   if (!address || !isConnected) {
  //     setLoadedAddress("")
  //     dispatch({ type: 'RESET' })
  //     return
  //   }

  //   if (address == loadedAddress) {
  //     window.localStorage.setItem('AI_MINT_' + address, JSON.stringify(state))
  //   } else {
  //     const storedState = window.localStorage.getItem('AI_MINT_' + address)
  //     if (storedState) {
  //       dispatch({ type: 'LOAD', payload: JSON.parse(storedState) })
  //     } else {
  //       dispatch({ type: 'RESET' })
  //     }
  //     setLoadedAddress(address)
  //   }
  // }, [ address, isConnected, loadedAddress, state ])

  return (
    <CollectionContext.Provider value={[ state, dispatch ]}>
      {children}
    </CollectionContext.Provider>
  );
};