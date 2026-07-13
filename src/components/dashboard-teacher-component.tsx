import { HeaderComponent } from "./header-component"
import { TargetGroupComponent } from "./target-group-component"

export const DashboardTeacherComponent = () => {
    return (
        <>
          <HeaderComponent />
    
          <main className="mx-auto max-w-7xl p-6">
            <section className="mb-8 rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <h1 className="text-3xl font-bold text-gray-800">
                Bienvenido, Andres
              </h1>
    
              <div className="mt-4 space-y-2 text-gray-600">
                <p>
                  <span className="font-semibold text-gray-800">Institución:</span>{" "}
                  I.E Goku Super Saiyajin
                </p>
              </div>
            </section>
    
            <section>
              <div className="mb-5 flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-gray-800">
                  Mis grupos
                </h2>
              </div>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                <TargetGroupComponent group="11-1" subject="Matematicas"/>
                <TargetGroupComponent group="11-1" subject="Matematicas"/>
                <TargetGroupComponent group="11-1" subject="Matematicas"/>
                <TargetGroupComponent group="11-1" subject="Matematicas"/>
              </div>
              
            </section>
          </main>
        </>
        )
}