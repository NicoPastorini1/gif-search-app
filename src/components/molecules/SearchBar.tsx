import { Search } from "lucide-react";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (category: string) => void; 
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue); 
    setInputValue(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-sm flex items-center">
      <Search className="absolute left-3 text-gray-500" size={20} />
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Buscar..."
        className="pl-10 pr-4 py-2 border border-gray-300 rounded-md"
      />
    </form>
  );
};

export default SearchBar;
