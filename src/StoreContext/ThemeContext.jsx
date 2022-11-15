import React, { createContext, useState } from 'react'
import { useEffect } from 'react'
export const ThemeContextProvider = createContext(null)
const ThemeContext = ({ children }) => {
    const [colors, setColors] = useState("Default")

    return (
        <ThemeContextProvider.Provider value={{ colors, setColors }}>{children} </ThemeContextProvider.Provider>
    )
}

export default ThemeContext