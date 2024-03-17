"use client";
import React from "react";
import { Linkedin, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TeamCardProps {
  image: string;
  name: string;
  role: string;
  quote: string;
  github: string;
  linkedin: string;
}

const TeamCard: React.FC<TeamCardProps> = ({
  image,
  name,
  role,
  quote,
  github,
  linkedin
}) => {
  return (
    <Card className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden w-20px h-218px">
      <img
        src={image}
        alt={name} 
        className="w-full object-cover rounded-t-lg"
        style={{ maxHeight: "250px" }}
      />
      <CardContent className="p-4">
        <CardTitle className="text-lg font-semibold mb-1">{name}</CardTitle>
        <CardDescription className="text-sm mb-2">{role}</CardDescription>
        <p className="text-sm italic">{quote}</p>
      </CardContent>
      <CardFooter className="flex justify-around items-center p-4 border-t border-dotted">
        <div className="flex justify-evenly w-full">
          <a href={github} aria-label="GitHub" className="w-8 h-8">
            <Linkedin />
          </a>
          <a href={linkedin} aria-label="LinkedIn" className="w-8 h-8">
            <Linkedin />
          </a>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
