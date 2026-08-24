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