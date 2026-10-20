import { useNavigate } from "react-router-dom";

interface Props {
    url:string;
    image:string;
    name:string;
}

export const TargetAction = ({url, image, name}:Props) => {
    const navigate = useNavigate()
    const goTo = () => {
        navigate(url,{replace:true})
    }

    return (
        <div className="p-5 border w-40 rounded-lg shadow-xl cursor-pointer hover:scale-110 transition-all duration-100" onClick={goTo}>
            <img 
                src={image} 
                alt={`${image} image`} 
                className="p-4 mb-3 object-cover h-30 mx-auto "
            />
            <h2 className="text-center">{name}</h2>
        </div>
    )
}