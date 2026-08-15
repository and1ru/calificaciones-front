// puede crear un profesor
// puede crear alumnos

import { TargetAction } from "../TargetAction/TargetAction"

export const AdminDashboard = () => {
    return (
        <main>
            <section>
                <h1>Wellcome Again, Nombre</h1>
            </section>
            <section className="flex gap-5">
                <TargetAction image="" name="CREATE TEACHER" url=""/>
                <TargetAction image="" name="CREATE STUDENT" url=""/>
                <TargetAction image="" name="CREATE SUBJECT" url=""/>
                <TargetAction image="" name="CREATE GROUP" url=""/>
                <TargetAction image="" name="LOG OUT" url=""/>
            </section>
        </main>
    )
}