import React, {createContext, useContext,useState} from "react";

const StateContext = createContext();

const initialState = {
chat : false
}

export const ContextProvider = ({children})=>{
    const [activeChat,setActiveChat] = useState(true)
    const [activeCart,setActiveCart] = useState(false)
    const [activeprofile,setActiveProfie] = useState(false)
    return (
       <StateContext.Provider value={
        {
            activeChat
        }
       }>
        {children}
       </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);