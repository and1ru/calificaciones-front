import { useGet } from "../useGet"

interface Branch{
    branch_id:number;
    branch_name:string;
    branch_address:string;
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