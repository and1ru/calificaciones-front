// admin -> samuel
// asignar estudiantes, profesores y materias
// poder editar los grupos

// teacher -> sebastian
// en el dashboard debe verse el nombre de la institucion, tambien los grupos a los que le da materias y la materia que da
// el profesor puede agregar una tarea nueva asignadole un nombre
// vera una tabla con todos los estudiantes y las tareas que ha creado en ese grupo
// precionando en la casilla se mostrara un dialog donde puede asignar la calificacion

// student -> luisa
// en el dashboard debe verse el nombre de la institucion y el grado al que pertenece
// debe verse las materias que le fueron asignadas
// en cada materia debe verse: el profesor que da la materia, la materia, todas las actividades con su nombre, la nota por actividad y al final el promedio

import { AssignProvider } from "./context/AssignContext/AssignProvider";
import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { AppRouterProvider } from "./routes/app-router-provider";

const App = () => {
  return (
    <AssignProvider>
      <AuthProvider>
        <AppRouterProvider />
      </AuthProvider>
    </AssignProvider>

  );
};

export default App