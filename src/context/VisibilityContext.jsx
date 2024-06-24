import { createContext, useState } from "react";

export const VisibilityContext = createContext();

export const VisibilityContextProvider = ({ children }) => {
    const [visibility, setVisibility] = useState(true);

    return (
        <VisibilityContext.Provider value={{ visibility, setVisibility }}>
            {children}
        </VisibilityContext.Provider>
    )
}
