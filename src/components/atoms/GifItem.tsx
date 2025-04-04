interface GifItemProps {
  title?: string;
  url: string;
}

const GifItem = ({ title = "GIF", url }: GifItemProps) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={url} alt={title || "GIF"} className="w-full h-40 object-cover" />
    </div>
  );
};

export default GifItem;
