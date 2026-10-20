import { useAuthContext } from "../../context/AuthContext/AuthContext"
import { HeaderDashboard } from "../HeaderDashboard/HeaderDashboard"
import { TargetAction } from "../TargetAction/TargetAction"
import schoolIcon from '../../assets/school.png'

export const RootDashboard = () => {
    const { auth } = useAuthContext()
    return (
        <>
        <HeaderDashboard/>
        <main className="mx-auto max-w-7xl p-6">
            <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800">Welcome Again, {auth.name}</h2>
            </section>
            <section className="p-10 flex gap-5">
                <TargetAction 
                    image={schoolIcon} 
                    name="CREATE SCHOOL" 
                    url="/private/create_school" 
                />
            </section>
        </main>
        </>
    )
}