import { Controller, type Control, type FieldError } from "react-hook-form";
import type { loginType } from "../schemas/login-schema";

interface Props {
    control: Control<loginType>,
    label:string;
    name: keyof loginType,
    error?: FieldError
    type: string;
}

export const InputComponent = <T,>({control, name, error, type, label}:Props) => {
  return (
    <>
        <label htmlFor={name}>{label}</label>
            <Controller
        name={name}
        control={control}
        render={({field}) => <input {...field} type={type}/>}
    />    
    { error && <p>{error.message}</p>}
    </>

  );
};
