import { useGet } from "../useGet"

interface Branch{
    id:number;
    name:string;
    address:string;
}

interface Response{
    message:string;
    success:boolean
    response: Branch[]
}

export const useGetBranches = () => {
    const { data, error, loading } = useGet<Response>("branches")
    return { data, error, loading }
}