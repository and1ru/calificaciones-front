import { useForm, type SubmitHandler } from "react-hook-form"
import { userSchema, type userType } from "../../schemas/user"
import { HeaderActions } from "../../components/HeaderActions/HeaderActions"
import { Input } from "../../components/Input/Input"
import { Select } from "../../components/Select/Select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreateUser } from "../../customHooks/useCreateUser/useCreateUser"
import { Successfully } from "../../components/Successfully/Successfully"
import { Error } from "../../components/Error/Error"
import { useEffect } from "react"

export const CreateUser = () => {
  const { createUser, error, loading, data } = useCreateUser()
  const { control, handleSubmit, formState: { errors }, reset } = useForm<userType>({
    defaultValues: {
      email: "",
      name: "",
      password: "",
      role: "student"
    },
    mode: "onBlur",
    resolver: zodResolver(userSchema)
  })

  const handleForm: SubmitHandler<userType> = (body) => {
    createUser(body)
  }

  useEffect(()=> {
    if(data?.success){
      reset()
    }
  },[data?.success])

  return (
    <>
      {error && <Error error={true}><p>¡ops! Something went wrong trying to create the user</p></Error>}
      {data?.success && <Successfully successfully={true}><p>User was created successfully</p></Successfully>}
      <HeaderActions />
      <main>
        <section className="w-110 shadow-xl p-7  rounded-lg mx-auto my-10">
          <h2 className="text-xl font-bold text-center mb-10">CREATE USER</h2>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleForm)}>
            <Input control={control} label="Name" name="name" type="text" error={errors.name} />
            <Input control={control} label="Email" name="email" type="email" error={errors.email} />
            <Input control={control} label="Password" name="password" type="password" error={errors.password} />
            <Select control={control} name="role">
              <option value="student">Student</option>
              <option value="teacher" >Teacher</option>
            </Select>
            <button
              disabled={loading}
              className={`bg-gray-700 w-full p-2 text-white font-bold rounded-lg ${loading && "cursor-not-allowed"}`}>SEND</button>
          </form>
        </section>
      </main>
    </>
  )
}