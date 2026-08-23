import { useGetTeacher } from "../../customHooks/useGetTeachers/useGetTeachers"

export const SelectTeacher = () => {
    const { data, error, loading } = useGetTeacher()
    if(loading) return <p>loading</p>
    if(error) return <p>error</p>
    return(
        <select name="" className="p-3 border outline-none rounded-lg">
            <option value={0}>select teacher</option>
            { data?.result.map((teacher) => (
                <option 
                className="p-3"
                key={teacher.user_id} value={teacher.user_id}>{teacher.user_name}</option>
                ))}
        </select>
    )
}