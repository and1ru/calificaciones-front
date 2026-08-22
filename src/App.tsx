import { AuthProvider } from "./context/AuthContext/AuthProvider";
import { AppRouterProvider } from "./routes/app-router-provider";

const App = () => {
  return (
    <AuthProvider>
      <AppRouterProvider/>
    </AuthProvider>
  );
};

export default App