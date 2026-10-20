import { useForm, type SubmitHandler } from "react-hook-form";
import { HeaderActions } from "../../components/HeaderActions/HeaderActions";
import { subjectSchema, type subjectType } from "../../schemas/subject";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { useCreateSubject } from "../../customHooks/useCreateSubject/useCreateSubject";
import { Successfully } from "../../components/Successfully/Successfully";
import { Error } from "../../components/Error/Error";
import { useEffect } from "react";

export const CreateSubject = () => {
  const {createSubject, error, loading, data} = useCreateSubject()
  const { control, handleSubmit, formState:{errors}, reset} = useForm<subjectType>({
    defaultValues:{
      subjectName: ""
    },
    mode: "onBlur",
    resolver: zodResolver(subjectSchema)
  })

  const handleForm:SubmitHandler<subjectType> = (body) => {
    createSubject(body)
  }

  useEffect(()=> {
    if(data?.success){
      reset()
    }
  },[data?.success])

  return (
    <>
    { error && <Error error={true}><p>¡ops! Something went wrong trying to create the subject</p></Error>}
    { data?.success && <Successfully successfully={true}>Subject was created successfully</Successfully>}
      <HeaderActions />
      <main>
        <section className="w-100 h-70 shadow-xl p-5 rounded-lg mx-auto mt-20">
          <h2 className="text-xl font-bold text-center mb-10">CREATE SUBJECT</h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleForm)}>
            <Input control={control} label="Subject Name" name="subjectName" type="text" error={errors.subjectName} />
            <button 
              disabled={loading}
              className={`bg-gray-700 w-full p-2 text-white font-bold rounded-lg ${ loading && "cursor-not-allowed"}`}>SEND</button>
          </form>
        </section>
      </main>
    </>
  );
};