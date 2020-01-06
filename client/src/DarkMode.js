import React from "react"
import { useDarkMode } from "./useDarkMode"

const DarkMode = ( ) => {
    const [darkMode,setDarkMode] = useDarkMode()
    const toggleDarkMode = e => {
        e.preventDefault()
        setDarkMode(!darkMode)

    }
    return (
        <div>
            <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
        </div>
    )

}
export default DarkMode