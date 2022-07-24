import { createContext, useState } from "react";

const initialState = 0
export const StepsContext = createContext(initialState);
export function StepsContextProvider({ children }) {

    const stepsState = useState(initialState);
    return (
        <StepsContext.Provider value={stepsState}>{children}</StepsContext.Provider>
    );
}