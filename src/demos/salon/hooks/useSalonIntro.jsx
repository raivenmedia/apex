import { useEffect } from 'react';

function useSalonIntro() {
  useEffect(() => {
    document.body.classList.add('salon-page');
    return () => document.body.classList.remove('salon-page');
  }, []);
}

export default useSalonIntro;
