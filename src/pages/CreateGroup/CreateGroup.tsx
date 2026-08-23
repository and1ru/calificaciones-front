import { useForm, type SubmitHandler } from "react-hook-form";
import { HeaderActions } from "../../components/HeaderActions/HeaderActions";
import { groupSchema, type groupType } from "../../schemas/group";
import { Input } from "../../components/Input/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateGroup } from "../../customHooks/useCreateGroup/useCreateGroup";
import { useGetBranches } from "../../customHooks/useGetBranches/useGetBranches";
import { Select } from "../../components/Select/Select";

export const CreateGroup = () => {
  const { createGroup, error, loading } = useCreateGroup()
  const { data } = useGetBranches()
  const { control, handleSubmit, formState:{errors}} = useForm<groupType>({
    defaultValues:{
      groupName: "",
      branchId:""
    },
    mode: "onBlur",
    resolver: zodResolver(groupSchema)
  })

  const handleForm:SubmitHandler<groupType> = (body) => {
    console.log(body)
    createGroup(body)
  }

  return (
    <>
      <HeaderActions />
      <main>
        <section className="w-100 shadow-xl p-5 rounded-lg mx-auto mt-20">
          <h1 className="text-xl font-bold text-center mb-10">CREATE GROUP</h1>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleForm)}>
            <Input control={control} label="Group Name" name="groupName" type="text" error={errors.groupName} />
            <Select control={control} name="branchId">
              <option value={0}>select a branch</option>
              { data?.response.map((branch) => (<option key={branch.branch_id} value={branch.branch_id}>{branch.branch_name}</option>))}
            </Select>
            <button type="submit" className="bg-gray-700 w-full p-2 text-white font-bold rounded-lg">SEND</button>
          </form>
        </section>
        { loading && <p>loading</p>}
        { error && <p>error</p>}
      </main>
    </>
  );
};
