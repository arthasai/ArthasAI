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
  linkedin,
}) => {
  return (
    <Card
      className="flex flex-col justify-between bg-white rounded-lg shadow-lg overflow-hidden"
      style={{ width: "205px", height: "335.69px" }}
    >
      <img
        src={image}
        alt={name}
        className="w-full object-cover rounded-t-lg"
        style={{ maxHeight: "250px" }}
      />
      <CardContent className="p-4 flex flex-col flex-grow">
        <div className="flex items-center justify-between">
            <CardTitle className="text-lg font-semibold mb-1">{name}</CardTitle>
            <div className="flex items-center space-x-2">
            <a href={github} aria-label="GitHub" className="w-8 h-8">
                <Github />
            </a>
            <a href={linkedin} aria-label="LinkedIn" className="w-8 h-8">
                <Linkedin />
            </a>
            </div>
        </div>
        <CardDescription className="text-sm mb-2">{role}</CardDescription>
        <p className="text-sm italic">{quote}</p>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
