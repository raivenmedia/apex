import { useEffect } from 'react';

function useDemoPageIntro() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.classList.add('hotel-demo-active');
    return () => {
      document.body.classList.remove('hotel-demo-active');
    };
  }, []);
}

export default useDemoPageIntro;
