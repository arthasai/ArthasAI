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
        <div className="p-10 w-1440px h-291px bg-custom-gradient">
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
          <div className="w-1/5 p-4 bg-white border-r-2">
            <h2 className="text-center font-medium text-2xl"> Overview </h2>
              <Link href="#faq" className="text-center">FAQ</Link>
          </div>

          {/* Main Content */}
          <div className="w-4/5 p-4 bg-white">
            <h2 id="mission" className="text-left font-medium text-2xl pb-4 px-4">
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

            {/* Extra Sections to test sidebar works*/}
            <h2 id="mission" className="text-left font-medium text-2xl pb-4 px-4">
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
            <h2 id = "faq" className="text-left font-medium text-2xl px-4 pb-4" > FAQ </h2>
            <Accordion className= "pb-4 px-4 " type="single" collapsible>
              <AccordionItem className = "border-box border-gray-200 rounded-lg shadow-lg mb-2 pb-2 px-4" value="item-1">
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className = "border-box rounded-2xl shadow-lg p-4 px-4" value="item-2"> 
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
