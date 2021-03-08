import React, { createContext, useReducer } from 'react';

const initialState = {
    isLoading: true
}

export const GlobalContext = createContext(initialState);

type State = {
    isLoading: boolean
}

type Action = {
    type: string
}

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "FETCH_DATA":
            return {isLoading: false};
        default:
            return state;
    }
}

const GlobalState:React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <GlobalContext.Provider value={{ 
            isLoading: state.isLoading
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalState
