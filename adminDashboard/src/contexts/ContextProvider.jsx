import React, {createContext, useContext,useState} from "react";

const StateContext = createContext();
const initialState = {
chat : false,
cart : false,
profile : false,
notification : false

}

export const ContextProvider = ({children})=>{
  
    const [isClicked,setIsClicked] = useState(initialState)
    const handleClick = (clicked)=>{
      
        setIsClicked({...initialState,[clicked]:true})
    }
    
    return (
       <StateContext.Provider value={
        {
            handleClick,isClicked
        }
       }>
        {children}
       </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);