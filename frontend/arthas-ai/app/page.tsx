// Home.tsx
"use client";

// Home.tsx
import React, { useEffect, useState } from "react";
import Link from "next/link";
import SearchBar from "./components/Searchbar"; // Adjust the import path based on your project structure
import { z } from "zod";
import { createClient } from "./utils/supabase/client";
import { Session } from "@supabase/supabase-js";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "./utils/providers/authProvider";

const Home = () => {
  const auth = useAuth();
  const supabase = createClient();

  const handleSearchSubmit = (query: string) => {
    console.log("Search query:", query);
    // Add your search logic here
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Main Content */}
      <h1>Logged in as: {auth.user?.email}</h1>
      <Button
        onClick={() => {
          supabase.auth.signOut();
        }}
      >
        Logout!
      </Button>
      <div className="max-w-xs grid grid-cols-3 gap-4">
        <div className="col-span-3 text-center">
          {/* Logo */}
          Logo
        </div>

        <SearchBar onSearchSubmit={handleSearchSubmit} />

        <div className="col-span-3 outline p-4 text-center rounded">
          {/* Content for Grid 2 */}
          Search Result Goes Here
        </div>

        <div className="col-span-3 p-4 text-center">
          {/* Clickable link to Resources page */}
          <Link href="/resources" className="hover:text-teal-200">
            Resources
          </Link>
        </div>

        {/* Add more grids as needed */}
      </div>
    </div>
  );
};

export default Home;
function zodResolver(
  loginSchema: z.ZodObject<
    { email: z.ZodString; password: z.ZodString },
    "strip",
    z.ZodTypeAny,
    { email: string; password: string },
    { email: string; password: string }
  >
):
  | import("react-hook-form").Resolver<{ email: string; password: string }, any>
  | undefined {
  throw new Error("Function not implemented.");
}