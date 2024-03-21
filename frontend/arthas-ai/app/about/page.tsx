// Resources.tsx
import React, {useState, useEffect} from "react";
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
          <div className="sticky top-0 bg-white p-6 border-r-2 md:w-1/5 md:max-h-screen md:overflow-y-auto ml-6 mt-2">
            <h2 className="text-left font-medium text-2xl pb-4"> Overview </h2>
            <div className = "flex flex-col"> 
                <Link href="#section-1" className="text-left italic underline pb-2">Section 1</Link>
                <Link href="#section-2" className="text-left italic underline pb-2">Section 2</Link>
                <Link href="#section-3" className="text-left italic underline pb-2">Section 3</Link>
                <Link href="#section-4" className="text-left italic underline pb-2">Section 4</Link>
                <Link href="#section-5" className="text-left italic underline pb-2">Section 5</Link>
                <Link href="#section-6" className="text-left italic underline pb-2">Section 6</Link>
                <Link href="#section-7" className="text-left italic underline">FAQ</Link>

            </div>
              
          </div>

          {/* Main Content */}
          <div className="bg-white p-6 w-full md:w-4/5 ml-6 mt-2 mr-6">
            <h2 id="section-1" className="text-left font-medium text-2xl pb-4">
              {" "}
              Mission{" "}
            </h2>
            <p className="text-left pb-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 id = "section-2" className="text-left font-medium text-2xl pb-4">
              {" "}
              Features{" "}
            </h2>
            <p className="text-left pb-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 id = "section-3" className="text-left font-medium text-2xl pb-4">
              {" "}
              Audience{" "}
            </h2>
            <p className="text-left pb-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Extra Sections to test sidebar works*/}
            <h2 id = "section-4" className="text-left font-medium text-2xl pb-4">
              {" "}
              Section 4{" "}
            </h2>
            <p className="text-left pb-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 id = "section-5" className="text-left font-medium text-2xl pb-4">
              {" "}
              Section 5{" "}
            </h2>
            <p className="text-left pb-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <h2 id = "section-6" className="text-left font-medium text-2xl pb-4">
              {" "}
              Section 6{" "}
            </h2>
            <p className="text-left pb-4">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* FAQ Section */}
            <h2 id = "section-7" className="text-left font-medium text-2xl pb-4" > FAQ </h2>
            <Accordion className= "pb-4 px-4 " type="single" collapsible>
              <AccordionItem className = "border-box rounded-2xl shadow-lg p-4 px-4" value="item-1">
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
