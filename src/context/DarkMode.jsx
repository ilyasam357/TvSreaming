import {  createContext, useState } from "react";

 const DarkModeContext = createContext();

const DarkModeContextProvider = ({children})=>{
    const [isDark , setIsDark] = useState(false)

    return(
        <DarkModeContext.Provider value={{isDark, setIsDark}}>
            {children}
        </DarkModeContext.Provider>
    )
}

export const ThemeDarkMode = DarkModeContext
export default DarkModeContextProvider