// Resources.tsx
import React from "react";
import Link from "next/link";

const Home = () => {
  const handleSearchSubmit = (query: string) => {
    console.log("Search query:", query);
    // Add your search logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Main Content */}
      <div className="grid grid-cols-3 gap-4">
        
        <div className="col-span-3 outline p-4 text-center rounded">
        {/* We use the <a/> tag when we want to use a link that isn't native to our application. For example a link to an external site. Make sure to use the target="blank" to open links in a new tab.*/}
            <a href="https://tailwindcss.com/docs/installation" target ="blank" className="hover:text-teal-200">
                Tailwinds CSS Documentation
            </a>
        </div>

        <div className="col-span-3 outline p-4 text-center rounded">
            <a href="https://play.tailwindcss.com/" target ="blank" className="hover:text-teal-200">
                Tailwinds CSS Playground
            </a>
        </div>

        {/* Add more grids as needed */}

        <div className="col-span-3 outline p-4 text-center rounded">
          {/* Clickable link to home page */}
          {/* We use the <Link/> component that next provides us when we want to route through pages in our application.*/}
          <Link href="/" className="hover:text-teal-200">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

