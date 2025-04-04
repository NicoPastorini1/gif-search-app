import { useState } from "react";
import Navbar from "./components/organisms/Navbar";
import GifGrid from "./components/organisms/GifGrid";

const App = () => {
  const [category, setCategory] = useState("trending");

  const handleCategoryChange = (newCategory: string) => {
    setCategory(newCategory || "trending");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white">
      <Navbar onCategoryChange={handleCategoryChange} />

      <main className="p-4">
        <GifGrid category={category} />
      </main>
    </div>
  );
};

export default App;
