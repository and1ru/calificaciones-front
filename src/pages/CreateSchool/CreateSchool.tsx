import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { schoolSchema, type schoolType } from "../../schemas/school";
import { Input } from "../../components/Input/Input";
import { Header } from "../../components/Header/Header";

export const CreateSchool = () => {
    const { handleSubmit, control, formState: { errors } } = useForm<schoolType>({
        mode: "onBlur",
        defaultValues: {
            email: "",
            password: "",
        },
        resolver: zodResolver(schoolSchema)
    });

    const handleForm: SubmitHandler<schoolType> = (data) => {
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
                                Create School
                            </h1>
                        </div>
                        <Input control={control} error={errors.adminName} label="Admin Name" name="adminName" type="text" />
                        <Input control={control} error={errors.schoolName} label="School Name" name="schoolName" type="text" />
                        <Input control={control} error={errors.email} label="Email" name="email" type="email" />
                        <Input control={control} error={errors.password} label="Password" name="password" type="password" />
                        <Input control={control} error={errors.confirmPassword} label="Confirm Password" name="confirmPassword" type="password" />

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
