// Home.tsx
'use client';

import React from "react";
import SearchBar from "./components/Searchbar";; // Adjust the import path based on your project structure

const Home = () => {
  const handleSearchSubmit = (query: string) => {
    console.log("Search query:", query);
    // Add your search logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Main Content */}
      <div className="grid grid-cols-3 gap-4">
        
        <div className="col-span-3 bg-gray-500 p-4 text-center">
          {/* Logo */}
          Logo here 
        </div>

        <SearchBar onSearchSubmit={handleSearchSubmit} />

        <div className="col-span-3 bg-gray-500 p-4 text-center">
          {/* Content for Grid 2 */}
          Search Result
        </div>

        {/* Add more grids as needed */}
      </div>
    </div>
  );
};

export default Home;
