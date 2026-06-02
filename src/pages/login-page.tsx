import { useForm, type SubmitHandler } from "react-hook-form";
import type { loginType } from "../schemas/login-schema";
import { InputComponent } from "../components/Input-component";

export const LoginPage = () => {
    const { handleSubmit, control, formState: {errors}} = useForm<loginType>({
        mode:"onBlur",
        defaultValues: {
            email: "",
            name: "",
            password: "",
        }
    })

    const handleForm:SubmitHandler<loginType> = (data) => {
        console.log(data)
    }

  return (
    <form onSubmit={handleSubmit(handleForm)}>
        <InputComponent control={control} error={errors.name} label="Name" name="name" type="text"/>
        <InputComponent control={control} error={errors.email} label="Email" name="email" type="email"/>
        <InputComponent control={control} error={errors.password} label="Password" name="password" type="password"/>
        <InputComponent control={control} error={errors.role} label="Role" name="role" type="text"/>
        <button type="button">Enviar</button>
    </form>
  );
};
