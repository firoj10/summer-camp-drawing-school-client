
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
            const res = await axios.get(`http://localhost:5000/student/instructor/teacher/${user?.email}`)
            // const res = await axios.get('http://localhost:5000/student/instructor/teacher/ahsasan@gmail.com')
            console.log('is admin response ', res)
         return res.data.instructor;
        }
        })
        return [isInstructor, isInstructorLoading]
};

export default useInstructor;