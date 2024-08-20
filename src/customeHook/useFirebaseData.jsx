import { useState, useEffect, useCallback } from 'react';

// Custom hook for fetching and managing Firebase data
export const useFirebaseData = (fetchFunction, initialState = null, dependencies = []) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Memoize the fetch function to prevent unnecessary re-renders
  const memoizedFetchFunction = useCallback(fetchFunction, dependencies);

  useEffect(() => {
    // Flag to prevent state updates if the component unmounts
    let isMounted = true;
    const fetchData = async () => {
      try {
        setLoading(true);
        // Call the provided fetch function
        const result = await memoizedFetchFunction();
        // Update state only if component is still mounted
        if (isMounted) {
          setData(result);
          setError(null); // Clear any previous errors
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    // Cleanup function to prevent state updates if component unmounts
    return () => {
      isMounted = false;
    };
  }, [memoizedFetchFunction]);

  // Return the state values for use in components
  return { data, loading, error };
};