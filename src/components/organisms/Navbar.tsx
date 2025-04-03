import NavLinks from "../molecules/NavLinks";
import SearchBar from "../molecules/SearchBar";

interface NavbarProps {
  onCategoryChange: (category: string) => void;
}

const Navbar = ({ onCategoryChange }: NavbarProps) => {
  return (
    <nav className="bg-white dark:bg-gray-900 p-4 shadow">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto">
        <a href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
          Search GIF App
        </a>
        <NavLinks onCategoryChange={onCategoryChange} />
        <SearchBar onSearch={onCategoryChange} />  {/* Pasar la función a SearchBar */}
      </div>
    </nav>
  );
};

export default Navbar;
