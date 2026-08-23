import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../customHooks/useAuth/useAuth"
import { useAuthContext } from "../../context/AuthContext/AuthContext"
import { useEffect } from "react"

export const RootPage = () => {
    const { data, error, loading } = useAuth()
    const { setAuth } = useAuthContext()

    useEffect(()=> {
        if(data?.success){
            setAuth({role:data.auth.role, name:data.auth.name})
        }
    },[data])

    if(loading) return <p>loading</p>
    if(error) return <Navigate to="/login" replace></Navigate>
    if(data?.success) return(
        <>
            <Outlet></Outlet>
        </>
    )
}