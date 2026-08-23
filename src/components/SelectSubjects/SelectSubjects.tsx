import { useGetSubjects } from "../../customHooks/useGetSubjects/useGetSubjects"

export const SelectSubjects = () => {
    const { data, error, loading } = useGetSubjects()
    if(loading) return <p>loading</p>
    if(error) return <p>error</p>
    return(
        <select name="" id="" className="p-3 border outline-none rounded-lg mr-5">
            <option value={0} >select subject</option>
            { data?.result.map((subject) => (
                <option key={subject.subject_id} value={subject.subject_id}>{subject.subject_name}</option>
                ))}
        </select>
    )
}