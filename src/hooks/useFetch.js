import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
  // Hooks
  // State
  // For data storing
  const [data, setData] = useState(null);
  // For loading (no error if API is slow)
  const [isLoading, setIsLoading] = useState(true);
  // For getting errors
  const [error, setError] = useState('');

  //   Side effects
  // Fetching data from API
  useEffect(() => {
    axios
      .get(endpoint)
      .then((res) => {
        // asigning data from API
        setData(res.data);
        // Stoping loading
        setIsLoading(false);
      })
      .catch((err) => {
        // Getting error
        setError(err.err);
        // Stoping loading
        setIsLoading(false);
      });
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useFetch;
