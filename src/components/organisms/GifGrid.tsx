import useFetchGifs from "../../hooks/useFetchGifs";
import GifItem from "../atoms/GifItem";

interface GifGridProps {
  category: string;
}

const GifGrid = ({ category }: GifGridProps) => {
  const { gifs, loading } = useFetchGifs(category);

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">{category}</h2>

      {loading && <p>Cargando...</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gifs.map((gif) => (
          <GifItem key={gif.id} url={gif.url} />
        ))}
      </div>
    </div>
  );
};

export default GifGrid;
