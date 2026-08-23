import { useAuthContext } from "../../context/AuthContext/AuthContext"
import { HeaderDashboard } from "../HeaderDashboard/HeaderDashboard"
import { TargetAction } from "../TargetAction/TargetAction"

export const RootDashboard = () => {
    const { auth } = useAuthContext()
    return (
        <>
        <HeaderDashboard/>
        <main>
            <section>
                <h1>Wellcome Again, {auth.name}</h1>
            </section>
            <section className="flex gap-5">
                <TargetAction image="goku" name="CREATE SCHOOL" url="/private/create_school" />
            </section>
        </main>
        </>
        
    )
}