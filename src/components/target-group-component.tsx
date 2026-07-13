import { useNavigate } from "react-router-dom";

interface Props {
  group: string;
  subject: string;
}

export const TargetGroupComponent = ({ group, subject }: Props) => {
      const navigate = useNavigate()

    function handleClick(){
      navigate("/private/clase/1", {replace:true})
    }
  return (
    <div 
    onClick={handleClick}
    className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="space-y-2">
        <p className="text-gray-600">
          <span className="font-medium text-gray-800">Grupo:</span> {group}
        </p>

        <p className="text-gray-600">
          <span className="font-medium text-gray-800">Materia:</span> {subject}
        </p>
      </div>
    </div>
  );
};