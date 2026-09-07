// root -> andres
// mejorar los estilos del dashboard
// mensaje de error para los inputs
// confirm password que funcione
// mensaje de que se creo la escuela y reiniciar a valores por defecto

// admin -> samuel
// mejorar los estilos del dashboard
// mensajes de error de input en create branch
// mensaje de que se creo la branch
// se reinicia los valores de branch si es exitoso
// mensajes de error de input en create user
// mensaje de que se creo el user
// se reinician los valores en caso de que sea exitoso
// mensaje de que se creo el subject
// se reinician los valores en caso de que sea exitoso
// mensaje de input para el subject
// mensaje de error para el input de create group
// mensaje de que se creo correctamente el group
// que se reinicien los valores si todo sale bien
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