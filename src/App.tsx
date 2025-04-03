import { useState } from "react";
import GifGrid from "./components/organisms/GifGrid";
import Navbar from "./components/organisms/Navbar";

function App() {
  const [category, setCategory] = useState("trending"); 

  const handleCategoryChange = (category: string) => {
    setCategory(category);
  };

  return (
    <>
      <Navbar onCategoryChange={handleCategoryChange} />
      <GifGrid category={category} />
    </>
  );
}

export default App;
