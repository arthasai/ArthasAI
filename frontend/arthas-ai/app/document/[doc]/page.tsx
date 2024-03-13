"use client";

import React, { use, useEffect, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { ImperativePanelHandle, collapsePanel } from "../utils";
import { useQuery, useMutation } from "@tanstack/react-query";

import dynamic from "next/dynamic";
import { Settings, PanelTopOpen, ChevronLeft, ArrowRight } from "lucide-react";
import { Toaster } from "@/components/ui/toaster";

const Editor = dynamic(() => import("./editor"), { ssr: false });
const Flow = dynamic(() => import("./graphs"), { ssr: false });

function DocumentEditor({ params }: { params: { doc: string } }) {
  const fetcher = useQuery({
    queryKey: [`/document/${params.doc}/api`],
    queryFn: async () => {
      // TODO: Fetch all document information
      try {
        const res = await fetch(`/document/${params.doc}/api`);
        return res.json();
      } catch (error) {
        throw error;
      }
    },
  });

  const mutator = useMutation({
    mutationKey: ["document", "update"],
    mutationFn: async () => {
      // TODO: Create function to update document
    },
  });

  const readerRef = useRef<ImperativePanelHandle>(null);
  const notesRef = useRef<ImperativePanelHandle>(null);
  const chatbotRef = useRef<ImperativePanelHandle>(null);
  const nodegraphRef = useRef<ImperativePanelHandle>(null);

  const handleCollapse = (panelRef: React.RefObject<ImperativePanelHandle>) => {
    collapsePanel(panelRef.current);
  };

  return (
    <div className="h-screen w-screen">
      <Toaster />
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel id="reader" className="w-full" defaultSize={50}>
          <div id="top-reader" className="flex justify-between p-4">
            <Button variant="outline">
              <ChevronLeft />
            </Button>
            <Button
              onClick={() => {
                handleCollapse(readerRef);
              }}
            >
              <ArrowRight />
            </Button>
          </div>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel
          id="right-panel"
          className="w-full pl-4"
          collapsible
          defaultSize={50}
          minSize={30}
          maxSize={60}
          ref={readerRef}
        >
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel
              id="notes"
              collapsible
              minSize={20}
              defaultSize={60}
              ref={notesRef}
              className="!overflow-auto"
            >
              <div className="w-9/10 h-10 flex justify-between items-center space-x-4 p-8">
                <div>{"Document Name's Notes"}</div>
                <div className="flex">
                  <Button variant="ghost">
                    <Settings />
                  </Button>
                </div>
              </div>
              <Editor params={params} />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <div className="w-full p-2 flex justify-between items-center">
              <div>Assistant</div>
              <div>
                <Button
                  variant="ghost"
                  onClick={() => {
                    handleCollapse(chatbotRef);
                  }}
                >
                  <PanelTopOpen />
                </Button>
              </div>
            </div>
            <ResizablePanel
              id="chatbot"
              collapsible
              minSize={20}
              defaultSize={60}
              ref={chatbotRef}
            >
              Chatbot
            </ResizablePanel>
            <ResizableHandle withHandle />
            <div className="w-full p-2 flex justify-between items-center">
              <div>Relationship Graph</div>
              <div>
                <Button
                  variant="ghost"
                  onClick={() => {
                    handleCollapse(nodegraphRef);
                  }}
                >
                  <PanelTopOpen />
                </Button>
              </div>
            </div>
            <ResizablePanel
              id="nodegraph"
              collapsible
              minSize={20}
              defaultSize={60}
              ref={nodegraphRef}
            >
              <Flow params={params} />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default DocumentEditor;
