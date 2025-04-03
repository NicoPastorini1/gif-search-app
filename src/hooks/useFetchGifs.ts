import { useState, useEffect } from "react";

const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGifs = async () => {
      setLoading(true);
      setError(null); // Reset error when fetching new data

      // Revisa si ya hay datos almacenados en caché
      const cachedGifs = localStorage.getItem(category);
      if (cachedGifs) {
        setGifs(JSON.parse(cachedGifs));
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/${category}?api_key=yBn4Vj9y6M4Qq3dJzEHeAypN4CEb7B2k&limit=12`);
        if (!response.ok) {
          throw new Error("Error fetching GIFs");
        }
        const data = await response.json();
        setGifs(data.data);

        // Guarda los GIFs en caché
        localStorage.setItem(category, JSON.stringify(data.data));
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGifs();
  }, [category]);

  return { gifs, loading, error };
};

export default useFetchGifs;
