import { useState } from "react";
import { SelectSubjects } from "../SelectSubjects/SelectSubjects";
import { SelectTeacher } from "../SelectTeacher/SelectTeacher";
import { useAssignContext } from "../../context/AssignContext/AssignContext";

export const ListTeacherSubject = () => {
  const [subjectSelected, setSubjectSelected] = useState<null | number>(null)
  const [teacherSelected, setTeacherSelected] = useState<null | number>(null)
  const { setAssign, assign } = useAssignContext()

  const addClick = () => {
    if(!subjectSelected || !teacherSelected){
      return
    }

    const include = assign.teacherSubject?.some((element) => element.subject === subjectSelected)
    if(include === true){
      alert("goku popo")
      return
    }

    const teacherSubject = {
      subject:subjectSelected,
      teacher:teacherSelected
    }

    setAssign((prev) => ({...prev, teacherSubject: [...(prev.teacherSubject ?? []),teacherSubject,]}));
  }

  return (
    <>          
      <SelectSubjects onSelected={setSubjectSelected}/>
      <SelectTeacher onSelected={setTeacherSelected} />
      <button className="p-2 ml-3 bg-green-300 rounded-lg" onClick={addClick}>+</button>
      <ul className="flex flex-col gap-5 mt-10">
        { assign.teacherSubject?.map((element, index) => (
          <li key={index} id={`${index}`} className="flex justify-between border p-4 rounded-lg items-center">
            <p>subject: {element.subject} | teacher {element.teacher}</p>
            <button className="bg-red-400 w-10 h-10 rounded-lg text-lg font-bold">-</button>
          </li>
        ) )}
      </ul>
    </>

  );
};
