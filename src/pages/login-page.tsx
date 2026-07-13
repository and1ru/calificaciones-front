import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import type { loginType } from "../schemas/login-schema";
import { InputComponent } from "../components/Input-component";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schemas/login-schema";


export const LoginPage = () => {
  const navigate = useNavigate();

  const {handleSubmit,control,formState: { errors }} = useForm<loginType>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema)
  });

  const handleForm: SubmitHandler<loginType> = (data) => {
    console.log(data);
  };

  const handleGoToRegister = () => {
    navigate("/register", { replace: true });
  };

  const handleGoToDashboard = () => {
    navigate("/private/dashboard", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-md space-y-5"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Iniciar sesión
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Ingresa tus datos para continuar
          </p>
        </div>
        <InputComponent
          control={control}
          error={errors.email}
          label="Correo"
          name="email"
          type="email"
        />

        <InputComponent
          control={control}
          error={errors.password}
          label="Contraseña"
          name="password"
          type="password"
        />

        <button
        onClick={handleGoToDashboard}
          type="submit"
          className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800"
        >
          Enviar
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-600">
        Don't have an account?{" "}
        <button
          type="button"
          onClick={handleGoToRegister}
          className="font-medium text-black underline underline-offset-4 hover:text-gray-700"
        >
          Register
        </button>
      </p>
    </div>
  );
};