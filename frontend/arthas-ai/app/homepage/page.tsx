// Resources.tsx
"use client";
import React from "react";
import Link from "next/link";
import { useState } from "react";

const LoginRoute = () => {
	const [isRegister, setIsRegister] = useState(false);
	return (
		<div className="">
			{isRegister ? (
				<SignUpComp setIsRegister={setIsRegister} />
			) : (
				<LoginComp setIsRegister={setIsRegister} />
			)}
		</div>
	);
};

const LoginComp = (props: any) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className="">
			<h2 className="text-3xl pt-12">Welcome!</h2>
			<h3 className="text-dashLinkText text-sm pt-2">
				New Here? Join others by{" "}
				<button className="underline" onClick={() => props.setIsRegister(true)}>
					creating an account
				</button>
				.
			</h3>
			<div className="mt-12"></div>
			<form>
				<div>
					<label
						htmlFor="email"
						className="block text-sm font-medium leading-6 text-gray-900 pb-2 text-dashInputColor">
						Email
					</label>
					<input
						type="email"
						name="email"
						id="email"
						required
						className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
				<div className="mt-6">
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
			</form>
			<div className="block w-full text-right mt-4">
				<button className="text-dashInputColor text-sm underline">
					Forgot Password
				</button>
			</div>
			<div className="block w-full mt-4">
				<button className="rounded-full block w-full bg-dashButtonBrown text-white pt-3 pb-3 mt-6">
					Login
				</button>
			</div>
		</div>
	);
};

const SignUpComp = (props: any) => {
	return (
		<div className="">
			<h2 className="text-3xl pt-12">Get Started...</h2>
			<h3 className="text-dashLinkText text-sm pt-2">
				Forgot your a member?{" "}
				<button
					className="underline"
					onClick={() => props.setIsRegister(false)}>
					Login
				</button>{" "}
				with your credentials.
			</h3>
			<div className="mt-12"></div>
			<div>
				<label
					htmlFor="name"
					className="block text-sm font-medium leading-6 text-gray-900 pb-2 text-dashInputColor">
					Name
				</label>
				<input
					id="name"
					name="name"
					type="text"
					required
					className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
				/>
			</div>
			<div className="mt-6">
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
			<div className="mt-6">
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
			<div className="block w-full mt-12">
				<button className="rounded-full block w-full bg-dashButtonBrown text-white pt-3 pb-3 mt-6">
					Sign Up
				</button>
			</div>
		</div>
	);
};

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
				{/* Login/Register */}
				<div className="h-4/6 pl-8 pr-8">
					<LoginRoute />
				</div>
				{/* footer */}
				<div className="h-1/6 text-center">
					<div className="h-4/6"></div>
					<div className="h-2/6 text-dashLinkText">
						<Link href="/resources" className="pr-6">
							About Us
						</Link>
						<Link href="/resources">Our Team</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

// bg-gradient-to-br from-neutral-50 via-purple-50 to-fuchsia-200

export default Homepage;
