// src/components/useFetchJobs.js
import { useState, useEffect } from 'react';

// Mock function to simulate fetching jobs
const useFetchJobs = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setData([
        { id: 1, title: 'Frontend Developer', category: 'Frontend' },
        { id: 2, title: 'Backend Developer', category: 'Backend' },
        { id: 3, title: 'Full-stack Developer', category: 'Full-stack' }
      ]);
      setLoading(false);
    }, 2000); // Simulate a 2-second delay for API call
  }, []);

  return { data, loading, error };
};

export default useFetchJobs;
