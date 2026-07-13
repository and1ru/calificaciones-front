export function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Navbar */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-blue-600">
            Grade<span className="text-slate-900">System</span>
          </h1>

          <nav className="flex items-center gap-4">
            <a
              href="/login"
              className="text-slate-600 transition hover:text-blue-600"
            >
              Iniciar sesión
            </a>

            <a
              href="/register"
              className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
            >
              Registrarse
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 py-20 lg:flex-row">
        {/* Texto */}
        <div className="flex-1">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-medium text-blue-600">
            Plataforma académica
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Gestiona las calificaciones de forma
            <span className="text-blue-600"> simple y organizada.</span>
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Una plataforma diseñada para facilitar el seguimiento académico.
            Los profesores pueden registrar las calificaciones de sus
            estudiantes y los estudiantes pueden consultar sus notas, materias
            y promedio desde cualquier lugar.
          </p>

          <div className="mt-10 flex gap-4">
            <a
              href="/login"
              className="rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Iniciar sesión
            </a>

            <a
              href="/register"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Crear cuenta
            </a>
          </div>
        </div>

        {/* Imagen */}
        <div className="flex flex-1 justify-center">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=700"
            alt="Estudiantes"
            className="w-full max-w-lg rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* Características */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h3 className="text-4xl font-bold text-slate-900">
              Todo lo que necesitas
            </h3>

            <p className="mt-4 text-slate-600">
              Diseñado para facilitar el trabajo de profesores y estudiantes.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {/* Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-3xl">
                📚
              </div>

              <h4 className="text-2xl font-semibold text-slate-900">
                Estudiantes
              </h4>

              <p className="mt-3 text-slate-600">
                Consulta todas tus materias, visualiza tus calificaciones y
                conoce tu promedio de forma rápida.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-3xl">
                👨‍🏫
              </div>

              <h4 className="text-2xl font-semibold text-slate-900">
                Profesores
              </h4>

              <p className="mt-3 text-slate-600">
                Registra calificaciones, administra evaluaciones y consulta el
                rendimiento de cada grupo desde un solo lugar.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-3xl">
                🔒
              </div>

              <h4 className="text-2xl font-semibold text-slate-900">
                Seguro
              </h4>

              <p className="mt-3 text-slate-600">
                Cada usuario accede únicamente a la información que le
                corresponde, garantizando privacidad y seguridad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h3 className="text-4xl font-bold text-white">
            Empieza a gestionar el rendimiento académico
          </h3>

          <p className="mt-6 text-lg text-blue-100">
            Organiza las calificaciones de manera sencilla y permite que los
            estudiantes consulten su progreso en cualquier momento.
          </p>

          <a
            href="/register"
            className="mt-10 inline-block rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            Comenzar ahora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-slate-500">
          © 2026 GradeSystem. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}