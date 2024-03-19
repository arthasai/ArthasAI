// Resources.tsx
"use client";
import React from "react";
import Slider from "./Slider";
import { Container } from "postcss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "../utils/supabase/client";
import { loginSchema } from "../utils/forms/zodTypes";
import { navigate } from "./actions";
import { useForm } from "react-hook-form";
import eye from "./eye.png";
import eyeOff from "./eyeOff.png";

const slides = [
	{
		url: "https://images.pexels.com/photos/11857626/pexels-photo-11857626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		title: "One Some type of title about the Arthas AI here",
		description:
			"One This can be a short description explaining what Arthas AI does random random random random random",
	},
	{
		url: "https://images.pexels.com/photos/12009316/pexels-photo-12009316.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		title: "Two Some type of title about the Arthas AI here",
		description:
			" Two This can be a short description explaining what Arthas AI does",
	},
	{
		url: "https://images.pexels.com/photos/3854478/pexels-photo-3854478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
		title: "Three Some type of title about the Arthas AI here",
		description:
			"Three This can be a short description explaining what Arthas AI does",
	},
];

const LoginRoute = () => {
	const [isView, setIsView] = useState("Login");
	return (
		<div className="">
			{isView === "ForgotPassword" ? (
				<ForgotPasswordComp setIsView={setIsView} />
			) : isView === "SignUp" ? (
				<SignUpComp setIsView={setIsView} />
			) : (
				<LoginComp setIsView={setIsView} />
			)}
		</div>
	);
};

const ErrorNotification = (props: { errorMessage: string }) => {
	return (
		<div>
			<p className="border-l-2 border-red-500 pl-2 text-dashInputColor text-sm text-left">
				{props.errorMessage}
			</p>
		</div>
	);
};

const LoginComp = (props: any) => {
	const [type, setType] = useState("password");
	const [icon, setIcon] = useState(eyeOff);

	const handleToggle = () => {
		if (type === "password") {
			setIcon(eye);
			setType("text");
		} else {
			setIcon(eyeOff);
			setType("password");
		}
	};

	const supabase = createClient();

	const form = useForm<z.infer<typeof loginSchema>>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		values: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof loginSchema>) => {
		console.log(data);
		await supabase.auth
			.signInWithPassword({
				email: data.email,
				password: data.password,
			})
			.then((response) => {
				if (response.error) {
					console.log(response.error);
				} else {
					navigate();
				}
			});
	};

	return (
		<div className="">
			<h2 className="text-3xl pt-12">Welcome!</h2>
			<h3 className="text-dashLinkText text-sm pt-2">
				New Here? Join others by{" "}
				<button className="underline" onClick={() => props.setIsView("SignUp")}>
					creating an account
				</button>
				.
			</h3>
			<div className="mt-12"></div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="mb-6">
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Email" {...field} />
								</FormControl>
								<FormMessage className="border-l-2 border-red-500 pl-2 text-dashInputColor text-sm text-left" />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<div className="relative flex items-center">
										<Input placeholder="Password" type={type} {...field} />
										<span
											className="absolute right-0 mr-2"
											onClick={handleToggle}>
											<Image src={icon} alt="test" height={20} width={20} />
										</span>
									</div>
								</FormControl>

								<FormMessage className="border-l-2 border-red-500 pl-2 text-dashInputColor text-sm text-left" />
							</FormItem>
						)}
					/>
					<div className="block w-full pt-6">
						<button className="rounded-full block w-full bg-dashButtonBrown text-white pt-3 pb-3 mt-6">
							Login
						</button>
					</div>
				</form>
			</Form>
			<div className="w-full mt-4">
				<div className="inline-block w-1/2 text-left"></div>
				<div className="inline-block w-1/2 text-right">
					<button
						className="text-dashInputColor text-sm underline"
						onClick={() => props.setIsView("ForgotPassword")}>
						Forgot Password
					</button>
				</div>
			</div>
		</div>
	);
};

const SignUpComp = (props: any) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState(false);
	const [passwordError, setPasswordError] = useState(false);
	const [signUpError, setSignUpError] = useState(false);
	const [type, setType] = useState("password");
	const [icon, setIcon] = useState(eyeOff);

	const handleToggle = () => {
		if (type === "password") {
			setIcon(eye);
			setType("text");
		} else {
			setIcon(eyeOff);
			setType("password");
		}
	};

	const handleSignUp = () => {
		if (!email.includes("@")) {
			setEmailError(true);
		} else {
			setEmailError(false);
		}

		if (password.length < 8) {
			setPasswordError(true);
		} else {
			setPasswordError(false);
		}

		if (emailError && passwordError) {
			//do something with supabase
			if (signUpError) {
				setSignUpError(true);
			}
		}
	};

	return (
		<div className="">
			<h2 className="text-3xl pt-12">Get Started...</h2>
			<h3 className="text-dashLinkText text-sm pt-2">
				Forgot your a member?{" "}
				<button className="underline" onClick={() => props.setIsView("Login")}>
					Login
				</button>{" "}
				with your credentials.
			</h3>
			<div className="mt-12"></div>
			<form>
				<div className="mt-6">
					<label
						htmlFor="email"
						className={`block text-sm font-medium leading-6 text-gray-900 pb-2 ${
							emailError ? "text-red-500" : "text-dashInputColor"
						}`}>
						Email
					</label>
					<input
						type="email"
						required
						onChange={(e) => setEmail(e.target.value)}
						className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
							emailError ? "ring-red-500" : ""
						}`}
					/>
				</div>
				<div className="mt-6">
					<label
						htmlFor="password"
						className={`block text-sm font-medium leading-6 text-gray-900 pb-2 ${
							passwordError ? "text-red-500" : "text-dashInputColor"
						}`}>
						Password
					</label>
					<div className="relative flex items-center">
						<input
							id="password"
							name="password"
							type={type}
							onChange={(e) => setPassword(e.target.value)}
							autoComplete="current-password"
							required
							className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
								passwordError ? "ring-red-500" : ""
							}`}
						/>
						<span className="absolute right-0 mr-2" onClick={handleToggle}>
							<Image src={icon} alt="test" height={20} width={20} />
						</span>
					</div>
				</div>
			</form>
			<div className="w-full text-left mt-4">
				{signUpError && (
					<ErrorNotification errorMessage="Enter valid credentials &#128075;" />
				)}
			</div>
			<div className={`block w-full ${signUpError ? "mt-6" : "mt-12"}`}>
				<button
					className="rounded-full block w-full bg-dashButtonBrown text-white pt-3 pb-3 mt-6"
					onClick={handleSignUp}>
					Sign Up
				</button>
			</div>
		</div>
	);
};

const ForgotPasswordComp = (props: any) => {
	const [email, setEmail] = useState("");
	const [emailError, setEmailError] = useState(false);

	const handleEmail = () => {
		if (!email.includes("@")) {
			setEmailError(true);
		} else {
			setEmailError(false);
			props.setIsView("Login");
		}
	};
	return (
		<div>
			<h2 className="text-3xl pt-12">Forgot Password?</h2>
			<h3 className="text-dashLinkText text-sm pt-2">
				No worries! Just enter your email and we will send you a reset link.
			</h3>
			<div className="mt-12"></div>
			<div>
				<label
					htmlFor="email"
					className={`block text-sm font-medium leading-6 text-gray-900 pb-2 ${
						emailError ? "text-red-500" : "text-dashInputColor"
					}`}>
					Email
				</label>
				<input
					type="email"
					required
					onChange={(e) => setEmail(e.target.value)}
					className={`block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ${
						emailError ? "ring-red-500" : ""
					}`}
				/>
			</div>
			<div className="block w-full mt-12">
				<button
					className="rounded-full block w-full bg-dashButtonBrown text-white pt-3 pb-3 mt-6"
					onClick={handleEmail}>
					{/* onClick={() => props.setIsView("Login")} */}
					Reset Password
				</button>
			</div>
		</div>
	);
};

const Homepage = () => {
	return (
		<div className="flex w-full min-h-screen">
			{/* left container */}
			<div className="w-3/5 m-auto">
				<Slider slides={slides} />
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

export default Homepage;
