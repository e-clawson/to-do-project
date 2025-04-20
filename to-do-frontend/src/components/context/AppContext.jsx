import { createContext, useState } from "react";

export const AppContent = createContext()

export const AppContextProvider = () => {

    const BASE_URL = import.meta.env.VITE_BASE_URL || VITE_BASE_URL
    const[isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState(false);

    const value = {
        BASE_URL, 
        isLoggedIn, setIsLoggedIn, 
        userData, setUserData
    }
    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}