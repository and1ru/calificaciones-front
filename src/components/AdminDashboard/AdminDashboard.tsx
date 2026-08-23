import { useAuthContext } from "../../context/AuthContext/AuthContext"
import { HeaderDashboard } from "../HeaderDashboard/HeaderDashboard"
import { TargetAction } from "../TargetAction/TargetAction"

export const AdminDashboard = () => {
    const { auth } = useAuthContext()
    return (
        <>
            <HeaderDashboard />
            <main>
                <h1>Wellcome Again, { auth.name }</h1>
                <section className="flex gap-5">
                    <TargetAction image="" name="CREATE BRANCH" url="/private/create_branch" />
                    <TargetAction image="" name="CREATE USER" url="/private/create_user" />
                    <TargetAction image="" name="CREATE SUBJECT" url="/private/create_subject" />
                    <TargetAction image="" name="CREATE GROUP" url="/private/create_group" />
                    <TargetAction image="" name="ASSIGN GROUP" url="/private/assign_group" />
                </section>
            </main>
        </>

    )
}