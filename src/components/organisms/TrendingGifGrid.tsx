import useFetchGifs from "../../hooks/useFetchGifs";
import GifItem from "../atoms/GifItem";

const TrendingGifGrid = () => {
  const { gifs, loading } = useFetchGifs("trending");

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">Trending GIFs</h2>

      {loading && <p>Cargando...</p>}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gifs.map((gif) => (
          <GifItem
            key={gif.id}
            title={gif.title}
            url={gif.images.fixed_height.url} // Cambié esto para usar la URL de la imagen
          />
        ))}
      </div>
    </div>
  );
};

export default TrendingGifGrid;
