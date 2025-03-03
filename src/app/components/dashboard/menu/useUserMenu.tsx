import fetchMenudata from "@/app/(dashboard)/menu/insertaction"
import { useQuery } from "@tanstack/react-query"

const useUserMenu = () => {
    const { data} = useQuery({
        queryKey:['menu'],
        queryFn: fetchMenudata
    }
    )
    return data
}

export default useUserMenu