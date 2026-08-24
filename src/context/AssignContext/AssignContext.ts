import { createContext, useContext } from "react";

interface TeacherSubject{
    teacher: number;
    subject: number
}

interface Assign{
    groupId:number;
    students?: number[];
    teacherSubject?: TeacherSubject[]
}

interface AssignContext{
    assign: Assign
    setAssign: React.Dispatch<React.SetStateAction<Assign>>
}

export const AssignContext = createContext<null | AssignContext>(null)

export const useAssignContext = () => {
    const context = useContext(AssignContext)
    if(!context){
        throw new Error("error context")
    }

    return context
}