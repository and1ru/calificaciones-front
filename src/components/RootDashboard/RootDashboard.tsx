import { Header } from "../Header/Header"
import { TargetAction } from "../TargetAction/TargetAction"

export const RootDashboard = () => {
    return (
        <>
        <Header/>
        <main>
            <section>
                <h1>Wellcome Again, Andrés</h1>
            </section>
            <section className="flex gap-5">
                <TargetAction image="" name="CREATE SCHOOL" url="/private/create_school" />
            </section>
        </main>
        </>
        
    )
}