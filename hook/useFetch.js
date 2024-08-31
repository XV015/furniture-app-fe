import { useEffect, useState } from 'react';
import axios from 'axios';

// http://192.168.1.8/api/products/
const useFetch = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);  
    try {
      const response = await axios.get('http://192.168.1.8:5000/api/products/'); 
      setData(response.data);
    } catch (error) {
      setError(error);
      console.log(error)
    } finally {
      setIsLoading(false); 
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
