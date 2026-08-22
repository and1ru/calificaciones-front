import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { schoolSchema, type schoolType } from "../../schemas/school";
import { Input } from "../../components/Input/Input";
import { HeaderActions } from "../../components/HeaderActions/HeaderActions";
import { useCreateSchool } from "../../customHooks/useCreateSchool/useCreateSchool";

export const CreateSchool = () => {
    const { createSchool, loading, error } = useCreateSchool()
    const { handleSubmit, control, formState: { errors } } = useForm<schoolType>({
        mode: "onBlur",
        defaultValues: {
            adminName:"",
            confirmPassword: "",
            schoolAddress: "",
            schoolCity: "",
            schoolName: "",
            email: "",
            password: "",
        },
        resolver: zodResolver(schoolSchema)
    });

    const handleForm: SubmitHandler<schoolType> = (body) => {
        console.log(body);
        createSchool(body)
    };
    return (
        <>
            <HeaderActions />
            <main>
                <section className="p-4">
                    <form
                        onSubmit={handleSubmit(handleForm)}
                        className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl space-y-5 mx-auto"
                    >
                        <h1 className="text-2xl font-bold text-center">
                            Create School
                        </h1>

                        <Input control={control} error={errors.schoolName} label="School Name" name="schoolName" type="text" />
                        <Input control={control} error={errors.schoolAddress} label="School Address" name="schoolAddress" type="text" />
                        <Input control={control} error={errors.schoolCity} label="School City" name="schoolCity" type="text" />
                        <Input control={control} error={errors.adminName} label="Admin Name" name="adminName" type="text" />
                        <Input control={control} error={errors.email} label="Email" name="email" type="email" />
                        <Input control={control} error={errors.password} label="Password" name="password" type="password" />
                        <Input control={control} error={errors.confirmPassword} label="Confirm Password" name="confirmPassword" type="password" />

                        <button type="submit"
                            className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800"
                        >
                            Enviar
                        </button>
                    </form>
                    { loading && <p>loading</p>}
                    { error && <p>error</p>}
                </section>
            </main>
        </>

    );
};
