// Resources.tsx
"use client";
import React from "react";
import Slider from "./homepage/Slider";
import Image from "next/image";
import Link from "next/link";
import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "./utils/supabase/client";
import {
	loginSchema,
	registerSchema,
	forgotPasswordSchema,
} from "./utils/forms/zodTypes";
import { navigate } from "./dashboard/action";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import eye from "./homepage/eye.png";
import eyeOff from "./homepage/eyeOff.png";

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
			{/* <EmailSentComp /> */}
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

const LoginComp = (props: any) => {
	const [type, setType] = useState("password");
	const [icon, setIcon] = useState(eyeOff);
	const supabase = createClient();
	const { toast } = useToast();

	const handleToggle = () => {
		if (type === "password") {
			setIcon(eye);
			setType("text");
		} else {
			setIcon(eyeOff);
			setType("password");
		}
	};

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
					toast({
						title: "❌ Error",
						description: `${response.error.message}`,
					});
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
	const [type, setType] = useState("password");
	const [icon, setIcon] = useState(eyeOff);
	const supabase = createClient();
	const { toast } = useToast();

	const handleToggle = () => {
		if (type === "password") {
			setIcon(eye);
			setType("text");
		} else {
			setIcon(eyeOff);
			setType("password");
		}
	};

	const form = useForm<z.infer<typeof registerSchema>>({
		resolver: zodResolver(registerSchema),
		defaultValues: {
			email: "",
			password: "",
		},
		values: {
			email: "",
			password: "",
		},
	});

	const onSubmit = async (data: z.infer<typeof registerSchema>) => {
		console.log(data);
		await supabase.auth
			.signUp({
				email: data.email,
				password: data.password,
			})
			.then((response) => {
				if (response.error) {
					toast({
						title: "❌ Error",
						description: `${response.error.message}`,
					});
				} else {
					navigate();
				}
			});
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
							Sign Up
						</button>
					</div>
				</form>
			</Form>
		</div>
	);
};

const ForgotPasswordComp = (props: any) => {
	const supabase = createClient();
	const { toast } = useToast();

	const form = useForm<z.infer<typeof forgotPasswordSchema>>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: "",
		},
		values: {
			email: "",
		},
	});
	const onSubmit = async (data: z.infer<typeof forgotPasswordSchema>) => {
		console.log(data);
		await supabase.auth
			.resetPasswordForEmail(data.email, {
				redirectTo: "https://example.com/update-password",
			})
			.then((response) => {
				if (response.error) {
					toast({
						title: "❌ Error",
						description: `${response.error.message}`,
					});
				} else {
					toast({
						title: "✅ Password Reset Email Sent!",
						description: "Please check your email for a reset link.",
					});
					props.setIsView("Login");
				}
			});
	};

	return (
		<div>
			<h2 className="text-3xl pt-12">Forgot Password?</h2>
			<h3 className="text-dashLinkText text-sm pt-2">
				No worries! Just enter your email and we will send you a reset link.
			</h3>
			<div className="mt-12"></div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem className="mb-10">
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input placeholder="Email" {...field} />
								</FormControl>
								<FormMessage className="border-l-2 border-red-500 pl-2 text-dashInputColor text-sm text-left" />
							</FormItem>
						)}
					/>
					<div>
						<button className="rounded-full block w-full bg-dashButtonBrown text-white pt-3 pb-3 mt-6">
							Reset Password
						</button>
					</div>
				</form>
			</Form>
		</div>
	);
};

const Homepage = () => {
	const { toast } = useToast();
	return (
		<div className="flex w-full min-h-screen">
			<Toaster />
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
						<Link href="/about" className="pr-6">
							About Us
						</Link>
						<Link href="/teampage">Our Team</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
