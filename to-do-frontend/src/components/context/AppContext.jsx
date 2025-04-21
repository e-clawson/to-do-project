import { createContext, useState } from "react";

export const AppContent = createContext()

export const AppContextProvider = (props) => {

    const BASE_URL = import.meta.env.VITE_BASE_URL 
    const[isSignedIn, setIsSignedIn] = useState(false);
    const [userData, setUserData] = useState(false);

    const value = {
        BASE_URL, 
        isSignedIn, setIsSignedIn, 
        userData, setUserData
    }
    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}