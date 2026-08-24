import { useState, type ReactNode } from "react";
import { AssignContext } from "./AssignContext";

interface Props{
    children: ReactNode
}

interface TeacherSubject{
    teacher: number;
    subject: number
}

interface Assign{
    groupId:number;
    students: number[];
    teacherSubject: TeacherSubject[]
}

export const AssignProvider = ({children}:Props) => {
    const [assign, setAssign] = useState<Assign>({groupId:0, students:[], teacherSubject:[]})
  return (
    <AssignContext.Provider value={{assign, setAssign}}>
        {children}
    </AssignContext.Provider>
  );
};
