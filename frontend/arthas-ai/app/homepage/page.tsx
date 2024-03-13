// Resources.tsx
import React from "react";
import Link from "next/link";

const Homepage = () => {
	return (
		<div className="flex w-full min-h-screen">
			{/* left container */}
			<div className="w-3/5 bg-green-500">
				<h1>Left Container</h1>
			</div>
			{/* right container */}
			<div className="w-2/5">
				{/* header */}
				<div className="h-1/6">
					<h1 className="text-xl font-semibold text-dashLogoTheme p-8">
						ARTHAS AI
					</h1>
				</div>
				{/* center */}
				<div className="h-4/6 pl-8 pr-8">
					<h2 className="text-3xl pt-12">Get Started...</h2>
					<div className="pt-4">
						<label
							htmlFor="name"
							className="block text-sm font-medium leading-6 text-gray-900 pb-2 text-dashInputColor">
							Name
						</label>
						<input
							type="text"
							required
							className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					<div className="pt-4">
						<label
							htmlFor="email"
							className="block text-sm font-medium leading-6 text-gray-900 pb-2 text-dashInputColor">
							Email
						</label>
						<input
							type="email"
							required
							className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					<div className="pt-4">
						<label
							htmlFor="password"
							className="block text-sm font-medium leading-6 text-gray-900 pb-2 text-dashInputColor">
							Password
						</label>
						<input
							id="password"
							name="password"
							type="password"
							required
							className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						/>
					</div>
					<div className="pt-14">
						<button className="rounded-full block w-full bg-dashButtonBrown text-white pt-3 pb-3">
							Sign Up
						</button>
						<div className="pt-20 text-center">
							<span>You already have an account?</span>
							<button className="rounded-full block w-full border-2 border-dashButtonBrown pt-3 pb-3 mt-3">
								Sign Up
							</button>
						</div>
					</div>
				</div>
				{/* footer */}
				<div className="h-1/6 text-center">
					<div className="h-4/6"></div>
					<div className="h-2/6">
						<Link
							href="/resources"
							className="text-xl underline text-dashLinkText pr-6">
							About Us
						</Link>
						<Link
							href="/resources"
							className="text-xl underline text-dashLinkText">
							Our Team
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

// bg-gradient-to-br from-neutral-50 via-purple-50 to-fuchsia-200

export default Homepage;
