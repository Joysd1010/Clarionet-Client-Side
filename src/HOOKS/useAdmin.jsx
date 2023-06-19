import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth"
import useAxiosSecure from "./useAxiosSecure";

const useAdmin=()=>{
    const {user}=useAuth()
    const [axios]=useAxiosSecure()
    const {data:isAdmin,isLoading: isAdminLoading}=useQuery({
        queryKey:['isAdmin',user?.email],
        enabled:!!user?.email,
        queryFn: async()=>{
            const res=await axios.get(`/user/admin/${user?.email}`);
            // console.log('admin response', res.data)
            return res.data.admin
        }

    })
    return [isAdmin,isAdminLoading]
}
export default useAdmin;