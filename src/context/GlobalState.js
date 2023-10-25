import React, { createContext, useReducer } from 'react';
import AppReducer from "./AppReducer";

// initial state
const initialState = {
    transactions : [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ],
}

// create context
export const GlobalState = createContext(initialState);

// creating provider component to wrap our children components so that they have access to the global state
export const GlobalProvider = ({children}) => {
    // dispatch is needed when we need to call a reducer action
    const [state, dispatch] = useReducer(AppReducer, initialState); // the first argument is the file where our reducer is created

    // Actions- that will make a call to the reducer
    function delTransaction(id){
        // we will dispatch to the reducer an object / action with a type and payload (the data to be sent to the reducer)
        dispatch({
            type : 'DELETE_TRANSACTION',
            payload : id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type : 'ADD_TRANSACTION',
            payload : transaction
        })
    }

    return (
        <GlobalState.Provider value={{
            transactions : state.transactions,
            delTransaction,
            addTransaction
        }}>
            {children}
        </GlobalState.Provider>
    );
}
