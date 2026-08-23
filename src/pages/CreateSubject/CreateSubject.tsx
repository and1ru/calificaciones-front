import { useForm, type SubmitHandler } from "react-hook-form";
import { HeaderActions } from "../../components/HeaderActions/HeaderActions";
import { subjectSchema, type subjectType } from "../../schemas/subject";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../../components/Input/Input";
import { useCreateSubject } from "../../customHooks/useCreateSubject/useCreateSubject";

export const CreateSubject = () => {
  const {createSubject, error, loading} = useCreateSubject()
  const { control, handleSubmit, formState:{errors}} = useForm<subjectType>({
    defaultValues:{
      subjectName: ""
    },
    mode: "onBlur",
    resolver: zodResolver(subjectSchema)
  })

  const handleForm:SubmitHandler<subjectType> = (body) => {
    console.log(body)
    createSubject(body)
  }

  return (
    <>
      <HeaderActions />
      <main>
        <section className="w-100 h-100 shadow-xl p-5 rounded-lg mx-auto mt-20">
          <h1 className="text-xl font-bold text-center mb-10">CREATE SUBJECT</h1>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleForm)}>
            <Input control={control} label="Subject Name" name="subjectName" type="text" error={errors.subjectName} />
            <button className="bg-gray-700 w-full p-2 text-white font-bold rounded-lg">SEND</button>
          </form>
        </section>
        { loading && <p>loading</p> }
        { error && <p>error</p> }
      </main>
    </>
  );
};
