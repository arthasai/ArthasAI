"use client";

import React, { use, useEffect, useRef, useState } from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Button } from "@/components/ui/button";
import { ImperativePanelHandle, collapsePanel } from "../utils";

import dynamic from "next/dynamic";
import useSWR from "swr";
import { createClient } from "@/app/utils/supabase/client";
import { Settings, PanelTopOpen } from "lucide-react";

const Editor = dynamic(() => import("./editor"), { ssr: false });
const Flow = dynamic(() => import("./graphs/graphs"), { ssr: false });

const supabase = createClient();

const fetcher = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then((res) => res.json());

function DocumentEditor({ params }: { params: { doc: string } }) {
  const { data, error, isLoading } = useSWR("/document/as/api", fetcher);
  const [toggleGroupValue, setToggleGroupValue] = useState<string[]>();

  useEffect(() => {
    if (toggleGroupValue?.includes("bot-visible")) {
      collapsePanel(chatbotRef.current);
    } else {
      collapsePanel(chatbotRef.current);
    }

    if (toggleGroupValue?.includes("node-visible")) {
      collapsePanel(nodegraphRef.current);
    } else {
      collapsePanel(nodegraphRef.current);
    }
  }, [toggleGroupValue]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const readerRef = useRef<ImperativePanelHandle>(null);
  const notesRef = useRef<ImperativePanelHandle>(null);
  const chatbotRef = useRef<ImperativePanelHandle>(null);
  const nodegraphRef = useRef<ImperativePanelHandle>(null);

  const handleCollapse = (panelRef: React.RefObject<ImperativePanelHandle>) => {
    collapsePanel(panelRef.current);
  };

  return (
    <div className="h-screen w-screen">
      <ResizablePanelGroup direction="horizontal" className="h-full">
        <ResizablePanel id="reader" className="w-full" defaultSize={50}>
          <Button
            onClick={async () => {
              handleCollapse(readerRef);
            }}
          >
            Collapse
          </Button>
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
              <Editor />
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
              <Flow />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

export default DocumentEditor;
