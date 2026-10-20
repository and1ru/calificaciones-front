import { useForm, type SubmitHandler } from "react-hook-form";
import { HeaderActions } from "../../components/HeaderActions/HeaderActions";
import { groupSchema, type groupType } from "../../schemas/group";
import { Input } from "../../components/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateGroup } from "../../customHooks/useCreateGroup/useCreateGroup";
import { useGetBranches } from "../../customHooks/useGetBranches/useGetBranches";
import { Select } from "../../components/Select/Select";
import { Error } from "../../components/Error/Error";
import { Successfully } from "../../components/Successfully/Successfully";
import { useEffect } from "react";

export const CreateGroup = () => {
  const { createGroup, error, loading, data:group } = useCreateGroup()
  const { data: branches } = useGetBranches()
  const { control, handleSubmit, formState:{errors}, reset} = useForm<groupType>({
    defaultValues:{
      groupName: "",
      branchId: ""
    },
    mode: "onBlur",
    resolver: zodResolver(groupSchema)
  })

  const handleForm:SubmitHandler<groupType> = (body) => {
    createGroup(body)
  }

  useEffect(()=> {
    if(group?.success){
      reset()
    }
  },[group?.success])

  return (
    <>
      { error && <Error error={true}><p>¡ops! Something went wrong trying to create group</p></Error>}
      { group?.success && <Successfully successfully={true}><p>Group was created successfully</p></Successfully>}
      <HeaderActions />
      <main>
        <section className="w-100 shadow-xl p-5 rounded-lg mx-auto mt-20">
          <h1 className="text-xl font-bold text-center mb-10">CREATE GROUP</h1>
          <form 
            className="flex flex-col gap-5" 
            onSubmit={handleSubmit(handleForm)}>
            <Input control={control} label="Group Name" name="groupName" type="text" error={errors.groupName} />
            <Select control={control} name="branchId">
              <option value={0}>select a branch</option>
              { branches?.response.map((branch) => (<option key={branch.id} value={branch.id}>{branch.name}</option>))}
            </Select>
            <button 
              disabled={loading}
              type="submit" 
              className={`bg-gray-700 w-full p-2 text-white font-bold rounded-lg ${ loading && "cursor-not-allowed"}`}>SEND</button>
          </form>
        </section>
      </main>
    </>
  );
};