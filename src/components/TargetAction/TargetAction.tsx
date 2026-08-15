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
        <div className="border w-40 h-40 rounded-lg" onClick={goTo}>
            <img src={image} alt="" className="h-20 w-full outline mb-3 rounded-t-lg" />
            <h2 className="text-center">{name}</h2>
        </div>
    )
}