import { useNavigate } from "react-router-dom";

interface Props{
    id:number;
    group:string;
    subject:string;
}
export const GroupComponent = ({id, group, subject}:Props) => {
    const navegar = useNavigate()

    function handleNavegar(id:number) {
        navegar(`/clase/${id}`)
    }
    
  return (
    <div
    onClick={() => handleNavegar(id)}
    key={id} className="shadow-gray-300 shadow-lg rounded-lg p-2 cursor-pointer">
        <p>{group}</p>
        <p>{subject}</p>
    </div>
  );
};
