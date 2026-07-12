import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { InputComponent } from "../components/Input-component";
import type { registerUserType } from "../schemas/register-schema";

export const RegisterPage = () => {
  const navigate = useNavigate();

  const { handleSubmit, control, formState: { errors } } = useForm<registerUserType>({
    mode: "onBlur",
    defaultValues: {
      connfirmPassword:"",
      email: "",
      name: "",
      password: "",
    },
  });

  const handleForm: SubmitHandler<registerUserType> = (data) => {
    console.log(data);
  };

  const handleGoToLogin = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit(handleForm)}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-md space-y-5"
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Registrarse
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Ingresa tus datos para continuar
          </p>
        </div>

        <InputComponent
          control={control}
          error={errors.name}
          label="Nombre"
          name="name"
          type="text"
        />

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

        <InputComponent
          control={control}
          error={errors.connfirmPassword}
          label="ConFirm Password"
          name="connfirmPassword"
          type="password"
        />
        <button
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
          onClick={handleGoToLogin}
          className="font-medium text-black underline underline-offset-4 hover:text-gray-700"
        >
          login
        </button>
      </p>
    </div>
  );
};