import { useForm, type SubmitHandler } from "react-hook-form"
import { userSchema, type userType } from "../../schemas/user"
import { HeaderActions } from "../../components/HeaderActions/HeaderActions"
import { Input } from "../../components/Input/Input"
import { Select } from "../../components/Select/Select"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreateUser } from "../../customHooks/useCreateUser/useCreateUser"

export const CreateUser = () => {
  const { createUser, error, loading } = useCreateUser()
  const { control, handleSubmit, formState: { errors } } = useForm<userType>({
    defaultValues:{
      email:"",
      name:"",
      password:"",
      role:"student"
    },
    mode: "onBlur",
    resolver: zodResolver(userSchema)
  })

  const handleForm:SubmitHandler<userType> = (body) => {
    console.log(body)
    createUser(body)
  }

  return (
    <>
      <HeaderActions />
      <main>
        <section className="w-100 shadow-xl p-5 rounded-lg mx-auto mt-20">
          <h1 className="text-xl font-bold text-center mb-10">CREATE USER</h1>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit(handleForm)}>
            <Input control={control} label="Name" name="name" type="text" error={errors.name} />
            <Input control={control} label="Email" name="email" type="email" error={errors.email} />
            <Input control={control} label="Password" name="password" type="password" error={errors.password} />
            <Select control={control} name="role">
              <option value="student">Student</option>
              <option value="teacher" >Teacher</option>
            </Select>
            <button className="bg-gray-700 w-full p-2 text-white font-bold rounded-lg">SEND</button>
          </form>
        </section>
        { loading && <p>loading</p> }
        { error && <p>error</p> }
      </main>
    </>
  )
}