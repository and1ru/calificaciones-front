import { useNavigate } from "react-router-dom";

interface Props {
  id: number;
  subject: string;
}

export const SubjectGroupCard = ({ id, subject }: Props) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/private/subject/${id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <h2 className="text-lg font-semibold text-gray-800">
        {subject}
      </h2>

      <div className="mt-4 flex items-center justify-between">
        <span className="text-sm text-gray-500">Promedio</span>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-800">
          3.0
        </span>
      </div>
    </div>
  );
};