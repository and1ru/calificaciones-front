import { TargetAction } from "../TargetAction/TargetAction"

export const RootDashboard = () => {
    return (
        <main>
            <section>
                <h1>Wellcome Again, Andrés</h1>
            </section>
            <section className="flex gap-5">
                <TargetAction image="" name="CREATE SCHOOL" url="" />
                <TargetAction image="" name="LOG OUT" url="" />
            </section>
        </main>
    )
}