interface GifItemProps {
    title?: string;
    url: string;
  }
  
  const GifItem = ({ title, url }: GifItemProps) => {
    return (
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={url} alt={title} className="w-full h-40 object-cover" />
        {title && <p className="text-center text-sm font-semibold">{title}</p>}
      </div>
    );
  };
  
  export default GifItem;