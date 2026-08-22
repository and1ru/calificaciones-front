import { useState, type ReactNode } from "react"
import { AuthContext } from "./AuthContext"

interface props {
    children:ReactNode
}

interface Auth{
    role: string
}

export const AuthProvider = ({children}:props) => {
    const [auth, setAuth] = useState<Auth>({role:""})
    return(
        <AuthContext.Provider value={{auth, setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}