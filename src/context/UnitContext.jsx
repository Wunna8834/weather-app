import { createContext, useState } from "react";

export const UnitContext = createContext()

export const UnitProvider = ({children}) => {
    const [isCelsius, setCelsius] = useState(true)
    return(
        <UnitContext.Provider value={{isCelsius, setCelsius}}>
            {children}
        </UnitContext.Provider>
    )
}