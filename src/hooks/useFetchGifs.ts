import { useEffect, useState } from 'react';

interface Gif {
  id: string;
  title: string;
  url: string;
}

export const useFetchGifs = (category: string) => {
  const [gifs, setGifs] = useState<Gif[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getGifs = async () => {
    const apiKey = 'yBn4Vj9y6M4Qq3dJzEHeAypN4CEb7B2k';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURIComponent(
      category
    )}&limit=10`;

    const response = await fetch(url);
    const { data } = await response.json();

    const gifsFormatted: Gif[] = data.map((img: any) => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url,
    }));

    setGifs(gifsFormatted);
    setIsLoading(false);
  };

  useEffect(() => {
    getGifs();
  }, [category]);

  return {
    gifs,
    isLoading,
  };
};

export default useFetchGifs;
