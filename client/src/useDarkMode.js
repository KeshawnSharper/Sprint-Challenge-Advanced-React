import { useLocalStorage} from "./useLocalStorage"
import React,{ useEffect } from "react"

export const useDarkMode = (props) => {
const [darkMode,setDarkMode] = useLocalStorage("darkmode",false)
useEffect(() => {
    if (darkMode){
        document.body.style.backgroundColor = "black"
    }
    else{
        document.body.style.backgroundColor = "white"
    }
},[darkMode,])
return [darkMode,setDarkMode]
}