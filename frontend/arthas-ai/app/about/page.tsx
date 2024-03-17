// Resources.tsx
import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <>
      <Head>
        <title>About Arthas AI</title>
      </Head>
      <header className="bg-gray-100 p-6">NavBar (GIAN PLEASE HELP)</header>

      <main>
        {/* Banner */}
        <div className="p-10 w-1440px h-291px bg-pink-100">
          <h1 className="text-center font-medium text-3xl pb-4">
            {" "}
            About Arthas AI
          </h1>
          <p className="text-center font-sm pb-4">
            {" "}
            This can be a short description explaining what the app does, and
            the background can include an image.
          </p>
        </div>

        <div className="flex w-full min-h-screen">
          {/* SideBar */}
          <div className="w-1/3 h-screen p-4 bg-gray-100">
            <h2 className="text-center font-medium text-2xl"> Overview </h2>
          </div>

          {/* Main Content */}
          <div className="w-2/3 p-4 bg-blue-100">
            <h2 className="text-left font-medium text-2xl pb-4 px-4">
              {" "}
              Mission{" "}
            </h2>
            <p className="text-left pb-4 px-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className="text-left font-medium text-2xl pb-4 px-4">
              {" "}
              Features{" "}
            </h2>
            <p className="text-left pb-4 px-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 className="text-left font-medium text-2xl pb-4 px-4">
              {" "}
              Audience{" "}
            </h2>
            <p className="text-left pb-4 px-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* FAQ Section */}
            <h2 className="text-left font-medium text-2xl px-4"> FAQ </h2>
            <Accordion className= "pb-4 px-4" type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
