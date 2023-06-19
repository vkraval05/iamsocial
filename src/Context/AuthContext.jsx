import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('user')) || null);

    const login = () => {
        setCurrentUser({ id: 1, name: 'vartik', ProfilePic: "https://images.pexels.com/photos/4881619/pexels-photo-4881619.jpeg?cs=srgb&dl=pexels-cottonbro-studio-4881619.jpg&fm=jpg" })
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser])

    return (<AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>)
}