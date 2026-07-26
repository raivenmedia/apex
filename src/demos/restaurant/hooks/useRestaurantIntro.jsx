import { useEffect } from 'react';

function useRestaurantIntro() {
  useEffect(() => {
    document.body.classList.add('restaurant-page');
    return () => document.body.classList.remove('restaurant-page');
  }, []);
}

export default useRestaurantIntro;
