import { createContext, useState } from "react";

export const AppContent = createContext()

export const AppContextProvider = (props) => {

    const BASE_URL = import.meta.env.VITE_BASE_URL 
    const[isSignedIn, setIsSignedIn] = useState(false);
    const [userData, setUserData] = useState(false);

    const getUserData = async () => {
        try{
            const response = await fetch(`${BASE_URL}/user/data`)
            const data = await response.json()
            setUserData(data)
            console.log(userData)
        }catch(error){ 

        }
    }
    const value = {
        BASE_URL, 
        isSignedIn, setIsSignedIn, 
        userData, setUserData, 
        getUserData
    }
    return (
        <AppContent.Provider value={value}>
            {props.children}
        </AppContent.Provider>
    )
}