
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useClasses = () => {
  const { user, loading } = useContext(AuthContext);

  const fetchClasses = async () => {
    const response = await axios.get(`https://summer-camp-droing-school-server-firoj10.vercel.app/selectclass/${user?.email}`);
    return response.data;
  };

  const { data: classes = [], refetch } = useQuery(['selectclass', user?.email], fetchClasses, {
    enabled: !loading,
  });

  return [classes, refetch];
};

export default useClasses;
