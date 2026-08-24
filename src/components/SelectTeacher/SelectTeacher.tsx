import { useGetTeacher } from "../../customHooks/useGetTeachers/useGetTeachers"

interface Props{
    onSelected: React.Dispatch<React.SetStateAction<number | null>>
}

export const SelectTeacher = ({onSelected}:Props) => {
    const { data, error, loading } = useGetTeacher()

    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        const value = Number(e.target.value)
        console.log(value)
        onSelected(value)
    }

    if(loading) return <p>loading</p>
    if(error) return <p>error</p>
    return(
        <select name="" className="p-3 border outline-none rounded-lg " onChange={handleSelect}>
            <option value={0}>select teacher</option>
            { data?.result.map((teacher) => (
                <option 
                className="p-3"
                key={teacher.user_id} value={teacher.user_id}>{teacher.user_name}</option>
                ))}
        </select>
    )
}