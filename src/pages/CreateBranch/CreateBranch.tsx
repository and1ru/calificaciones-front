import { useForm, type SubmitHandler } from "react-hook-form"
import { branchSchema, type branchType } from "../../schemas/branch"
import { zodResolver } from "@hookform/resolvers/zod"
import { HeaderActions } from "../../components/HeaderActions/HeaderActions"
import { Input } from "../../components/Input/Input"
import { useCreateBranch } from "../../customHooks/useCreateBranch/useCreateBranch"

export const CreateBranch = () => {
    const { createBranch, error, loading } = useCreateBranch()
    const { handleSubmit, control, formState:{errors}} = useForm<branchType>({
        defaultValues:{
            branchAddress:"",
            branchName:""
        },
        mode: "onBlur",
        resolver: zodResolver(branchSchema)
    })

    const handleForm:SubmitHandler<branchType> = (body) => {
        console.log(body)
        createBranch(body)
    }

    return(
        <>
            <HeaderActions />
            <main className="mt-5">
                <section className="w-full max-w-md rounded-xl bg-white p-8 shadow-xl mx-auto">
                    <h1 className="text-xl text-center font-bold mb-10">CREATE BRANCH</h1>
                    <form 
                        className="flex flex-col gap-5"
                        onSubmit={handleSubmit(handleForm)}
                        >
                        <Input control={control} label="Branch Name" name="branchName" type="text" error={errors.branchName} />
                        <Input control={control} label="Branch Address" name="branchAddress" type="text" error={errors.branchAddress} />
                        <button className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800">SEND</button>
                    </form>
                </section>
                {loading && <p>loading</p>}
                { error && <p>error</p>}
            </main>
        </>
    )
}