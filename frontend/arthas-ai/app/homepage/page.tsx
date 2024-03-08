// Resources.tsx
import React from "react";
import Link from "next/link";

const Homepage = () => {
	return (
		<div className="flex w-full min-h-screen">
			<div className="w-3/5 bg-green-500">
				<div>
					<h3>Alberto</h3>
				</div>
			</div>
			<div className="w-2/5 bg-blue-500">
				<h1>Right Container</h1>
			</div>
		</div>
	);
};

export default Homepage;
