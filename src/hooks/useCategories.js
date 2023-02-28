import { useState, useEffect } from 'react';

function useCategories(url) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((cat) => setCategories(cat));
  }, []);

  return { categories };
}

export default useCategories;
