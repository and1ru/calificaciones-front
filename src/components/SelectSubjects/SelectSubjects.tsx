import { useGetSubjects } from "../../customHooks/useGetSubjects/useGetSubjects"

interface Props {
    onSelected: React.Dispatch<React.SetStateAction<number | null>>
}

export const SelectSubjects = ({onSelected}:Props) => {
    const { data, error, loading } = useGetSubjects()

    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement, HTMLSelectElement>) => {
        const value = Number(e.target.value)
        console.log(value)
        onSelected(value)
    }

    if(loading) return <p>loading</p>
    if(error) return <p>error</p>
    return(
        <select name="" id="" className="p-3 border outline-none rounded-lg mr-5" onChange={handleSelect}>
            <option value={0} >select subject</option>
            { data?.result.map((subject) => (
                <option key={subject.subject_id} value={subject.subject_id}>{subject.subject_name}</option>
                ))}
        </select>
    )
}