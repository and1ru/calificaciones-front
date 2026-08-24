import { useAssignContext } from "../../context/AssignContext/AssignContext"
import { useGetGroups } from "../../customHooks/useGetGroups/useGetGroups"

export const SelectGroup = () => {
    const { data, error, loading } = useGetGroups()
    const { setAssign } = useAssignContext()

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const groupId = Number(e.target.value)
        setAssign((prev) => ({...prev, groupId}))
    }

    if (loading) return <p>loading</p>
    if (error) return <p>error</p>
    return (
        <select className="p-3 border rounded-lg w-full mb-5" onChange={handleSelect}>
            <option value="">Select Group</option>
            {data?.result.map((branch) => (
                <optgroup label={branch.branch_name} key={branch.branch_id}>
                    {branch.groups.map((group) => (
                        <option value={group.group_id} key={group.group_id}>{group.group_name}</option>
                    ))}
                </optgroup>
            ))}
        </select>
    )
}