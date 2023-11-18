import { createContext, useReducer } from "react";

export const LocationContext = createContext(null)

const LocationReducer = (state, action) => {
    switch(action.type) {
        case 'NEW_SEARCH':
            return action.payload;
        default:
            return state;
    }
}

export const LocationProvider = ({children}) => {
    const [state, dispatch] = useReducer(LocationReducer, {location: "yangon"})

    return (
        <LocationContext.Provider value={{state, dispatch}}>
            {children}
        </LocationContext.Provider>
    )
}