'use client'

const { createContext, useState, useContext } = require("react");

const ProfileContext = createContext()

export const ProfileProvider = ({ children }) => {
    const [showComp, setShowComp] = useState(false)
    const [showDoc, setShowDoc] = useState(false)

    return(
        <ProfileContext.Provider value={{ showComp, showDoc, setShowComp, setShowDoc }}>
            {children}
        </ProfileContext.Provider>
    )
}

export const useProfile = () => useContext(ProfileContext)