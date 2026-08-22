import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type loginType } from "../../schemas/login";
import { Input } from "../../components/Input/Input";
import { useLogin } from "../../customHooks/useLogin/useLogin";
import { useEffect } from "react";


export const Login = () => {
  const navigate = useNavigate();
  const { data, error, loading, login } = useLogin()
  const {handleSubmit,control,formState: { errors }} = useForm<loginType>({
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema)
  });

  const handleForm: SubmitHandler<loginType> = (body) => {
    console.log(body);
    login(body)
  };

  useEffect(()=> {
    if(data?.success){
      navigate("/private/dashboard", {replace:true})
    }
  },[data])
  

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
        <Input control={control} error={errors.email} label="Correo" name="email" type="email"/>
        <Input control={control} error={errors.password} label="Contraseña" name="password" type="password"/>
        <button className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800">
          Enviar
        </button>
      </form>
      { loading && <p>loading</p>}
      { error && <p>error</p>}
    </div>
  );
};