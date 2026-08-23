import { createContext, useContext } from "react";

interface Auth{
    role: string
    name: string
}

interface AuthContext {
    auth: Auth
    setAuth: React.Dispatch<React.SetStateAction<Auth>>
}

export const AuthContext = createContext<null | AuthContext>(null)

export const useAuthContext = () => {
    const context = useContext(AuthContext)
    if(!context){
        throw new Error("can't use context out the provider")
    }

    return context
}