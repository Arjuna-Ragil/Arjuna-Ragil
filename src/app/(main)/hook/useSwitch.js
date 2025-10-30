'use client'

const { createContext, useContext, useState } = require("react")

const SwitchContext = createContext()

export const SwitchProvider = ({ children }) => {
    const [hideIntro, setHideIntro] = useState(false)
    const [showContent, setShowContent] = useState(false)

    function switchContent(){
        setHideIntro(true)
        setTimeout(() => {
            setShowContent(true)
        }, 1500)
    }

    return(
        <SwitchContext.Provider value={{ hideIntro, showContent, switchContent}}>
            {children}
        </SwitchContext.Provider>
    )
}

export const useSwitch = () => useContext(SwitchContext)