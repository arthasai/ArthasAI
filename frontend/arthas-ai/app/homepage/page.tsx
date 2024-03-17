// Resources.tsx
"use client"
import React from "react";
import Slider from "./Slider";
import { Container } from "postcss";




const slides = [{ url: "https://images.pexels.com/photos/11857626/pexels-photo-11857626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
				,title: "One Some type of title about the Arthas AI here", description: "One This can be a short description explaining what Arthas AI does random random random random random"},
			{ url: "https://images.pexels.com/photos/12009316/pexels-photo-12009316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
			,title: "Two Some type of title about the Arthas AI here", description: " Two This can be a short description explaining what Arthas AI does"},
			{ url: "https://images.pexels.com/photos/3854478/pexels-photo-3854478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
			,title: "Three Some type of title about the Arthas AI here", description: "Three This can be a short description explaining what Arthas AI does"}
		];



const Homepage = () => {
	return (
		<div className="flex w-full min-h-screen">
			<div className="w-3/5 m-auto">
				<Slider slides={slides}/>
			</div>
			<div className="w-2/5 bg-blue-500">
				<h1>Right Container</h1>
			</div>
		</div>
	);
};

export default Homepage;
