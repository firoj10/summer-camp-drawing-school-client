
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const useInstructor= () => {
    const {user, loading}=useContext(AuthContext)
   
        const {data: isInstructor, isLoading: isInstructorLoading } = useQuery({
          queryKey: ['isInstructor', user?.email],
          enabled: !loading,
          queryFn: async ()=>{
            const res = await axios.get(`http://localhost:5000/student/instructor/${user?.email}`)
            console.log('is admin response ', res)
         return res.data.admin;
        }
        })
        return [isInstructor, isInstructorLoading]
};

export default useInstructor;