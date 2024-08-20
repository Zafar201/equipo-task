import { useState, useEffect } from "react";

// Custom hook for handling media queries 
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Create a media query list object
    const media = window.matchMedia(query);

    // Update state if the initial match state differs from our state
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // Listener function to update state when media query match changes
    const listener = () => setMatches(media.matches);

    // Add resize event listener to window
    window.addEventListener("resize", listener);

    // Cleanup function to remove the event listener when component unmounts
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  // Return the current match state
  return matches;
}

export default useMediaQuery;