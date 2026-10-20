import { useForm, type SubmitHandler } from "react-hook-form"
import { branchSchema, type branchType } from "../../schemas/branch"
import { zodResolver } from "@hookform/resolvers/zod"
import { HeaderActions } from "../../components/HeaderActions/HeaderActions"
import { Input } from "../../components/Input/Input"
import { useCreateBranch } from "../../customHooks/useCreateBranch/useCreateBranch"
import { Successfully } from "../../components/Successfully/Successfully"
import { Error } from "../../components/Error/Error"
import { useEffect } from "react"

export const CreateBranch = () => {
    const { createBranch, error, loading, data } = useCreateBranch()
    const { handleSubmit, control, formState:{errors}, reset} = useForm<branchType>({
        defaultValues:{
            branchAddress:"",
            branchName:""
        },
        mode: "onBlur",
        resolver: zodResolver(branchSchema)
    })

    const handleForm:SubmitHandler<branchType> = (body) => {
        createBranch(body)
    }

    useEffect(()=> {
        if(data?.success){
            reset()
        }
    },[data?.success])

    return(
        <>
        { error && <Error error={true}><p>¡Ops! Something went wrong trying to create the branch</p></Error> }
        
        { data?.success && <Successfully successfully={true}><p>Branch was created successfully</p></Successfully>}
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
                        <button 
                            disabled={loading}
                            className={`w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800 ${ loading && "cursor-not-allowed"}`}>SEND</button>
                    </form>
                </section>
            </main>
        </>
    )
}