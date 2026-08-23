import { useEffect, useState } from "react"
import { useGetStudents } from "../../customHooks/useGetStudents/useGetStudents"

interface student {
    user_id: number;
    user_name: string;
    user_email:string
}

export const StudentsList = () => {
    const { data, error, loading } = useGetStudents()
    const [ studentsSelected, setStudentsSelected] = useState<student[]>([])
    const [ students, setStudents ] = useState<student[]>([])

    const addStudent = (userId:number) => {
        const student = data?.result.find((user) => user.user_id === userId )
        if(!student) return

        setStudentsSelected((students) => [...students, student ])

        const remove = students?.filter((user) => user.user_id !== userId)
        setStudents(remove)
    }

    const removeStudent = (userId:number) => {
        const user = studentsSelected.find((user) => user.user_id === userId)!
        setStudents((student) => [...student, user])
        const remove = studentsSelected?.filter((user) => user.user_id !== userId)
        setStudentsSelected(remove)
    }

    useEffect(()=> {
        if(data?.success){
            setStudents(data.result)
        }
    },[data])

    if (loading) return <p>loading</p>
    if (error) return <p>error</p>
    return (
        <>
            <h3>Students without group</h3>
            <ul>
                {students.map((student) => (
                    <li key={student.user_id} className="shadow-lg p-4 rounded-lg flex gap-5">
                        <button 
                        onClick={() => addStudent(student.user_id)}
                        className="bg-green-300 hover:bg-green-400 p-2 rounded-lg text-xl font-bold ">+</button>
                        <div>
                            <p>name: {student.user_name}</p>
                            <p>email: {student.user_email}</p>
                        </div>
                    </li>
                ))}
            </ul>
            <h3>Students selected</h3>
            { studentsSelected === null && <p>no students selected</p> }
            <ul>
                { studentsSelected?.map((student) => (
                    <li key={student.user_id} className="shadow-lg p-4 rounded-lg flex gap-5">
                        <button 
                        onClick={() => removeStudent(student.user_id)}
                        className="bg-red-300 hover:bg-red-400 p-2 rounded-lg text-xl font-bold ">-</button>
                        <p>name: {student.user_name} | email: {student.user_email}</p>
                    </li>
                ))}
            </ul>

        </>

    )
}