// Resources.tsx
"use client";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import {

  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "../components/Navbar";


const About = () => {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main>
        {/* Banner */}
        <div className="p-10 w-1440px h-291px bg-custom-gradient">
          <h1 className="text-center font-medium text-3xl pb-4">
            About Arthas AI
          </h1>
          <p className="text-center font-sm pb-4">
            Curious about something? Use the Arthas AI search engine to find research papers based on your curiousity.
          </p>
        </div>

        <div className="flex w-full min-h-screen">
          {/* SideBar */} 
          <div className="sticky top-0 bg-white p-6 border-r-2 md:w-1/5 md:max-h-screen md:overflow-y-auto ml-6 mt-2">
            <h2 className="text-left font-medium text-2xl pb-4"> Overview </h2>
            <div className = "flex flex-col"> 
                <Link href="#section-1" className="text-left italic underline pb-2">What is Arthas AI?</Link>
                <Link href="#section-2" className="text-left italic underline pb-2">Our Mission</Link>
                <Link href="#section-3" className="text-left italic underline pb-2">Audience</Link>
                <Link href="#section-4" className="text-left italic underline pb-2">Features</Link>
                <Link href="#section-5" className="text-left italic underline">FAQ</Link>
            </div>
              
          </div>

          {/* Main Content */}
          <div className="bg-white p-6 w-full md:w-4/5 ml-6 mt-2 mr-6">
            <h2 id="section-1" className="text-left font-medium text-2xl pb-4">
              What is Arthas AI?
            </h2>
            <p className="text-left pb-4">
              Arthas AI is an AI search engine platform created from scratch focused on efficiently searching for AI research papers. 
              It uses an AI first approach towards building a search engine that can more intelligently find, organize, 
              and deliver the information that piques our curiosity.
            </p>

            <h2 id = "section-2" className="text-left font-medium text-2xl pb-4">
              Our Mission
            </h2>
            <p className="text-left pb-4">
              Since the 1990s, search engines have revolutionized access to information. 
              Yet, three decades on, their fundamental mechanics have scarcely evolved. 
              With Arthas AI, we're pioneering a search engine that transcends
              traditional keyword searches. Our tool makes finding information faster and easier by understanding what you're really looking for. 
              This means less time spent searching and more time doing what matters. 
              Our aim is to make research simpler and more efficient than ever before, moving beyond what traditional search engines offer.
            </p>

            <h2 id = "section-3" className="text-left font-medium text-2xl pb-4">
              Audience
            </h2>
            <p className="text-left pb-4">
              Designed specifically for the academia, our platform reimagines the research process. 
              At its core, an AI-driven search engine adeptly suggests research papers that align closely with your queries, ensuring you find the most relevant academic resources. 
              Beyond a mere search tool, our platform integrates a text editor for seamless annotation and review of these papers, 
              all within the same application. Our solution is tailored to enhance productivity and insight for scholars, researchers, and students.
            </p>

            {/* Extra Sections to test sidebar works*/}
            <h2 id = "section-4" className="text-left font-medium text-2xl pb-4">
              Features
            </h2>

            <h2 className="text-left  text-xl font-medium pb-4 px-4"> 
            Search 
            </h2>
        
            <p className="text-left pb-4 px-4">
            Dive into a world of research articles with our AI-enhanced search! 
            Tailored for searching academic research papers, our engine doesn't just find keywords; 
            it understands your research needs, connecting you with the papers most relevant to your academic inquiries.
            </p>

            <h2 className="text-left  text-xl font-medium pb-4 px-4"> 
              Text Editor
            </h2>
        
            <p className="text-left pb-4 px-4">
            Our integrated text editor is designed for easy annotation, organization, and editing. It works seamlessly within the platform, 
            ensuring your thoughts are captured alongside your sources. It includes annotation features such as: 
            bolding titles, text Size Increase, highlighting, color coding, and ability blocks.
            </p>
            
            <h2 className="text-left  text-xl font-medium pb-4 px-4"> 
              AI Chatbot Window
            </h2>
        
            <p className="text-left pb-4 px-4">
              Need a Study Buddy? Use our AI Chatbot as your intelligent assistant, ready to generate summaries, 
              suggest citations, and offer insights on your findings! 
              It's like having a research partner that's well-versed in every subject.
            </p>

            <h2 className="text-left  text-xl font-medium pb-4 px-4"> 
              Visualization Graph
            </h2>
        
            <p className="text-left pb-5 px-4">
              Our Visualization Graph transforms your search into a visual map of connected research topics. 
              Each graph represents a research paper and represnts how they are related with each other. 
            </p>

            {/* FAQ Section */}
            <h2 id = "section-5" className="text-left font-medium text-2xl pb-4 pt-2" > FAQ </h2>
            <Accordion className= "pb-4 px-4 " type="single" collapsible>
              <AccordionItem className = "border-box rounded-2xl shadow-lg p-4 px-4" value="item-1">
                <AccordionTrigger>How does the AI search engine work?</AccordionTrigger>
                <AccordionContent>
                Our search engine uses deep learning to understand the context of your search query. 
                It then suggests research papers and articles that are closely related to your topic, 
                offering you a curated list of relevant research.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className = "border-box rounded-2xl shadow-lg p-4 px-4" value="item-2"> 
                <AccordionTrigger>Can I save and annotate papers directly on the platform?</AccordionTrigger>
                  <AccordionContent>
                    Yes. Our integrated text editor allows you to save, annotate, and manage your research papers directly within the platform
                  </AccordionContent>
              </AccordionItem>
              <AccordionItem className = "border-box rounded-2xl shadow-lg p-4 px-4" value="item-2"> 
                <AccordionTrigger>Is Arthas AI suitable for all academic disciplines?</AccordionTrigger>
                  <AccordionContent>
                    Absolutely! Our platform caters to a wide range of academic fields, 
                    offering extensive coverage of diverse research areas to support comprehensive scholarly work.
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
