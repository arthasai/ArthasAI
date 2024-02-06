// SearchBar.tsx
import React, { useState } from "react";

interface SearchBarProps {
  onSearchSubmit: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearchSubmit }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearchSubmit(searchQuery);
  };

  return (
    <div className="col-span-3 p-4 text-center">
      {/* Search Bar */}
      <form onSubmit={handleSubmit} className="flex items-center space-x-4">
        <div className="relative flex items-center">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md px-4 py-2 outline-none focus:border-blue-500 transition duration-300 bg-slate-600"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="submit"
            className="px-4 py-2 bg-slate-600 text-white hover:animate-pulse rounded-md ml-2 cursor-pointer"
          >
            →
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
