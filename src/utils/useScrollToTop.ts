import { useEffect } from 'react';

/**
 * Custom hook to scroll to top of the page when a component mounts
 */
const useScrollToTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export default useScrollToTop;
