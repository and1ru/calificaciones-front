import { useForm, type SubmitHandler } from "react-hook-form";
import { HeaderActions } from "../../components/HeaderActions/HeaderActions";
import { groupSchema, type groupType } from "../../schemas/group";
import { Input } from "../../components/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";

export const CreateGroup = () => {
  const { control, handleSubmit, formState:{errors}} = useForm<groupType>({
    defaultValues:{
      GroupName: ""
    },
    mode: "onBlur",
    resolver: zodResolver(groupSchema)
  })

  const handleForm:SubmitHandler<groupType> = (body) => {
    console.log(body)
  }

  return (
    <>
      <HeaderActions />
      <main>
        <section className="w-100 shadow-xl p-5 rounded-lg mx-auto mt-20">
          <h1 className="text-xl font-bold text-center mb-10">CREATE GROUP</h1>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleForm)}>
            <Input control={control} label="Group Name" name="GroupName" type="text" error={errors.GroupName} />
            <button className="bg-gray-700 w-full p-2 text-white font-bold rounded-lg">SEND</button>
          </form>
        </section>
      </main>
    </>
  );
};
