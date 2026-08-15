import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { Input } from "../../components/Input/Input";
import { Header } from "../../components/Header/Header";
import { teacherSchema, type teacherType } from "../../schemas/teacher";

export const CreateTeacher = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<teacherType>({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(teacherSchema)
    });

    const handleForm: SubmitHandler<teacherType> = (data) => {
        console.log(data);
    };
    return (
        <>
            <Header />
            <main>
                <section>
                    <form
                        onSubmit={handleSubmit(handleForm)}
                        className="w-full max-w-md rounded-xl bg-white p-8 shadow-md space-y-5"
                    >
                        <div className="text-center">
                            <h1 className="text-2xl font-bold text-gray-800">
                                Create Teacher
                            </h1>
                        </div>
                        <Input control={control} error={errors.name} label="Name" name="name" type="text"/>
                        <Input control={control} error={errors.email} label="Email" name="email" type="email" />
                        <Input control={control} error={errors.password} label="Password" name="password" type="password" />
                        
                        <button type="submit"
                            className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800"
                        >
                            Enviar
                        </button>
                    </form>
                </section>
            </main>
        </>

    );
};
