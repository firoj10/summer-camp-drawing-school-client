
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useAdmin = () => {
    const {user, loading}=useContext(AuthContext)
   

        const {data: isAdmin, isLoading: isAdminLoading } = useQuery({
          queryKey: ['isAdmin', user?.email],
          enabled: !loading,
          queryFn: async ()=>{
            const res = await axios.get(`http://localhost:5000/student/admin/${user?.email}`)
            console.log('is admin response ', res)
         return res.data.admin;
        }
        })
        return [isAdmin, isAdminLoading]
};

export default useAdmin;