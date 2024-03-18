// Resources.tsx
import React from "react";
import Link from "next/link";
import Teamcard from "../components/Teamcard";
import Head from 'next/head'

import { 
	Card, 
	CardContent, 
	CardDescription, 
	CardFooter, 
	CardHeader, 
	CardTitle 
  } from '@/components/ui/card'

{/* 2 Members */}
const teamLeads = [
	{
		id: "1",
		image: "https://i.pinimg.com/originals/9c/13/5e/9c135e483264e00b70cfc5329c5e55e2.jpg",
		name: "GOWON",
		role: "Frontend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "2",
		image: "https://i.pinimg.com/originals/9c/13/5e/9c135e483264e00b70cfc5329c5e55e2.jpg",
		name: "GOWON",
		role: "Frontend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	}
]

{/* 10 Members */}
const frontend = [
	{
		id: "3",
		image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
		name: "CHUU",
		role: "Frontend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "4",
		image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
		name: "CHUU",
		role: "Frontend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "5",
		image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
		name: "CHUU",
		role: "Frontend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "6",
		image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
		name: "CHUU",
		role: "Frontend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "7",
		image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
		name: "CHUU",
		role: "Frontend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "8",
		image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
		name: "CHUU",
		role: "Frontend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "9",
		image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
		name: "CHUU",
		role: "Frontend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "10",
		image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
		name: "CHUU",
		role: "Frontend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "11",
		image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
		name: "CHUU",
		role: "Frontend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "12",
		image: "https://i.pinimg.com/originals/89/79/90/897990126794575981766f3c71324152.jpg",
		name: "CHUU",
		role: "Frontend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	}
]

{/* 5 Members */}
const backend = [
	{
		id: "13",
		image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
		name: "YVES",
		role: "Backend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "14",
		image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
		name: "YVES",
		role: "Backend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "15",
		image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
		name: "YVES",
		role: "Backend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "16",
		image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
		name: "YVES",
		role: "Backend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	},
	{
		id: "17",
		image: "https://i.pinimg.com/originals/53/32/4b/53324bca1d5759d9c10c4b99847351ae.jpg",
		name: "YVES",
		role: "Backend Developer",
		quote: `"I worked on..."`,
		github: "http://github.com/gabsebas",
		linkedin: "https://linkedin.com/in/gabriela-sebastian-"
	}
]

  const TeamPage = () => {
	return (
	  <>
	  	<Head>
		  <title>Meet the Arthas AI Team!</title>
		</Head>
		<header className="bg-gray-100 p-6">NavBar (GIAN PLEASE HELP)</header>
		<main>
			{/* Banner */}
			<div className="p-10 w-1440 h-302.093 bg-custom-gradient">
				<h1 className="text-center font-medium pt-4 text-4xl">Meet The Arthas AI Team!</h1>
				<p className="p-4 text-center text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			{/* Team Leads */}
			<div className="flex flex-col items-center justify-center p-8">
				<h1 className="text-center text-3xl font-medium">Team Leads</h1>
				{/* Team Leads Grid */}
				<div className="grid grid-cols-2 gap-12 max-w-6xl pt-10">
					{teamLeads.map((lead) => (
              			<Teamcard key={lead.id} {...lead} />
            		))}
				</div>
			</div>
			{/* Frontend Team */}
			<div className="flex flex-col h-full items-center justify-center p-4">
				<h1 className="text-center text-3xl font-medium pb-4">Frontend Team</h1>
				{/* Frontend Team Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto max-w-7xl">
					{frontend.map((frontend) => (
              			<Teamcard key={frontend.id} {...frontend} />
            		))}
				</div>
			</div>
			{/* Backend Team */}
			<div className="flex flex-col h-full items-center justify-center p-4">
				<h1 className="text-center text-3xl font-medium pb-4">Backend Team</h1>
				{/* Backend Team Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-auto max-w-7xl">
					{backend.map((backend) => (
              			<Teamcard key={backend.id} {...backend} />
            		))}
				</div>
			</div>
		</main>
	  </>
	);
  };
  
  export default TeamPage;
  