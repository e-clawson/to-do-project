import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContent = createContext()

export const AppContextProvider = (props) => {

    const BASE_URL = import.meta.env.VITE_BASE_URL 
    const[isSignedIn, setIsSignedIn] = useState(false);
    const [userData, setUserData] = useState(false);

    const getAuthState = async () =>{
        try{
            const response = await fetch(`${BASE_URL}/auth/is-auth`)
            const data = await response.json()
            if (data.success){
                setIsSignedIn(true);
                getUserData();
            }

        }catch(error){
            toast.error(data.message)
        }
    }

    const getUserData = async () => {
        try{
            const response = await fetch(`${BASE_URL}/user/data`)
            const data = await response.json()
            data.success ? setUserData(data.userData) : toast.error(data.message)
        }catch(error){ 
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getAuthState();
    },[]);

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