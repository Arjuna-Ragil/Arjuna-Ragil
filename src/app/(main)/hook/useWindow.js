'use client'

const { createContext, useState, useContext, useEffect } = require("react");

const WindowContext = createContext()

export const WindowProvider = ({ children }) => {
    const [showWindow, setShowWindow] = useState(false)
    const [showConsole, setShowConsole] = useState(false)

    return(
        <WindowContext.Provider value={{showWindow, setShowWindow, showConsole, setShowConsole}}>
            {children}
        </WindowContext.Provider>
    )
}

export const useWindow = () => useContext(WindowContext)